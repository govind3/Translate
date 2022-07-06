// Google translate api key = AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  { label: "Hindi", value: "hi" },
  { label: "Nepali", value: "ne" },
  { label: "Punjabi", value: "pa" },
  { label: "Telugu", value: "te" },
  { label: "Urdu", value: "ur" },
  { label: "Arabic", value: "ar" },
  { label: "French", value: "fr" },
  { label: "Afrikaans", value: "af" },
  { label: "Japanese", value: "ja" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Spanish", value: "es" },
  { label: "Swahili", value: "sw" },
  { label: "Thai", value: "th" },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="ui purple label">
            <h4>Enter Text</h4>
          </label>
          <div className="ui input focus">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter Text ....."
            />
          </div>
        </div>
      </div>
      <Dropdown
        label={"Select a Language"}
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <h2 className="ui orange header">
        <u>Output :</u>
      </h2>
      <Convert text={text} language={language} />
    </div>
  );
};
export default Translate;
