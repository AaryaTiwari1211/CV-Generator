import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";

import { saveAs } from "file-saver";
import { Packer } from "docx";
import { experiences, education, skills, achievements } from "./cv-data";
import DocumentCreator from "../cv-generator"; // Assuming cv-generator.js exports the DocumentCreator class

class Convert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  generate() {
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create([
      experiences,
      education,
      skills,
      achievements
    ]);

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
          <button onClick={() => this.generate()}>Generate CV with docx!</button>
        </p>
      </div>
    );
  }
}

export default Convert
// render(<App />, document.getElementById("root"));
