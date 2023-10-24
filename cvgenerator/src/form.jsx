import React, { useState } from 'react';
import logo from './assets/logo.png';
import './form.css';

const Form = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    mobile: '',
    linkedin: '',
    city: '',
    country: '',
    educations: [],
    workExperiences: [],
    createWorkExperienceFields: [],
    projects: [],
    createProjectFields: [],
    skills: '', 
    languages: '',
  });
  const [error, setError] = useState('');
  const [mobileError, setMobileError] = useState(false)
  const [submitted, setSubmitted] = useState(false);
  const [createProjectFields, setCreateProjectFields] = useState(0);
  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const isValidMobile = (mobile) => {
    return /^\d{10}$/.test(mobile);
  };

  const handleAddEducation = () => {
    if (inputs.educations.length > 0) {
      const lastEducation = inputs.educations[inputs.educations.length - 1];
      if (
        lastEducation &&
        (lastEducation.universityName === '' ||
          lastEducation.city === '' ||
          lastEducation.country === '' ||
          lastEducation.startDate === '' ||
          lastEducation.endDate === '' ||
          lastEducation.degreeName === '' ||
          lastEducation.gpa === '' ||
          lastEducation.relevantCourses === '')
      ) {
        setError('Please fill in all the fields in the previous education');
        return;
      }
    }

    setInputs((prevInputs) => ({
      ...prevInputs,
      educations: [
        ...prevInputs.educations,
        {
          id: prevInputs.educations.length + 1,
          universityName: '',
          city: '',
          country: '',
          startDate: '',
          endDate: '',
          degreeName: '',
          gpa: '',
          relevantCourses: '',
        },
      ],
    }));
    setError('');
  };

  const handleEducationChange = (index, event) => {
    const { name, value } = event.target;
    const updatedEducations = [...inputs.educations];
    updatedEducations[index][name] = value;
    setInputs({ ...inputs, educations: updatedEducations });
  };

  const handleAddWorkExperience = () => {
    if (inputs.workExperiences.length > 0) {
      const lastWorkExperience = inputs.workExperiences[inputs.workExperiences.length - 1];
      if (
        lastWorkExperience &&
        (lastWorkExperience.companyName === '' ||
          lastWorkExperience.city === '' ||
          lastWorkExperience.country === '' ||
          lastWorkExperience.startDate === '' ||
          lastWorkExperience.endDate === '' ||
          lastWorkExperience.titlePositionHeld === '' ||
          lastWorkExperience.workDescription === '')
      ) {
        setError('Please fill in all the fields in the previous work experience');
        return;
      }
    }

    setInputs((prevInputs) => ({
      ...prevInputs,
      workExperiences: [
        ...prevInputs.workExperiences,
        {
          id: prevInputs.workExperiences.length + 1,
          companyName: '',
          city: '',
          country: '',
          startDate: '',
          endDate: '',
          titlePositionHeld: '',
          workDescription: '',
        },
      ],
    }));
    setError('');
  };

  const handleWorkExperienceChange = (index, event) => {
    const { name, value } = event.target;
    const updatedWorkExperiences = [...inputs.workExperiences];
    updatedWorkExperiences[index][name] = value;
    setInputs({ ...inputs, workExperiences: updatedWorkExperiences });
  };

  const handleAddCreateWorkExperience = () => {
    if (inputs.createWorkExperienceFields.length > 0) {
      const lastCreateWorkExperience =
        inputs.createWorkExperienceFields[inputs.createWorkExperienceFields.length - 1];
      if (lastCreateWorkExperience && lastCreateWorkExperience.text === '') {
        setError('Please fill in the field in the previous create work experience');
        return;
      }
    }

    setInputs((prevInputs) => ({
      ...prevInputs,
      createWorkExperienceFields: [
        ...prevInputs.createWorkExperienceFields,
        { id: prevInputs.createWorkExperienceFields.length + 1, text: '' },
      ],
    }));
    setError('');
  };

  const handleCreateWorkExperienceChange = (index, event) => {
    const { value } = event.target;
    const updatedCreateWorkExperienceFields = [...inputs.createWorkExperienceFields];
    updatedCreateWorkExperienceFields[index].text = value;
    setInputs({ ...inputs, createWorkExperienceFields: updatedCreateWorkExperienceFields });
  };

  const handleAddProject = () => {
    if (inputs.projects.length > 0) {
      const lastProject = inputs.projects[inputs.projects.length - 1];
      if (
        lastProject &&
        (lastProject.title === '' ||
          lastProject.date === '' ||
          lastProject.city === '' ||
          lastProject.country === '' ||
          lastProject.position === '' ||
          lastProject.description === '')
      ) {
        setError('Please fill in all the fields in the previous project');
        return;
      }
    }

    setInputs((prevInputs) => ({
      ...prevInputs,
      projects: [
        ...prevInputs.projects,
        {
          id: prevInputs.projects.length + 1,
          title: '',
          date: '',
          city: '',
          country: '',
          position: '',
          description: '',
        },
      ],
    }));
    setError('');
  };

  const handleProjectChange = (index, event) => {
    const { name, value } = event.target;
    const updatedProjects = [...inputs.projects];
    updatedProjects[index][name] = value;
    setInputs({ ...inputs, projects: updatedProjects });
  };

  const handleAddCreateProject = () => {
    if (createProjectFields.length > 0) {
      const lastCreateProject = inputs.createProjectFields[createProjectFields.length - 1];
      if (lastCreateProject && lastCreateProject.text === '') {
        setError('Please fill in the field in the previous create project');
        return;
      }
    }

    setInputs((prevInputs) => ({
      ...prevInputs,
      createProjectFields: [
        ...prevInputs.createProjectFields,
        { id: prevInputs.createProjectFields.length + 1, text: '' },
      ],
    }));
    setError('');
  };

  const handleCreateProjectChange = (index, event) => {
    const { value } = event.target;
    const updatedCreateProjectFields = [...inputs.createProjectFields];
    updatedCreateProjectFields[index].text = value;
    setInputs({ ...inputs, createProjectFields: updatedCreateProjectFields });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const errors = {};

    if (inputs.mobile.trim() === '') {
      setError('Please enter a valid mobile number.');
      setSubmitted(false);
      return;
    }

    if (!isValidMobile(inputs.mobile)) {
      setMobileError('Invalid mobile number. Please enter a 10-digit mobile number.');
      setSubmitted(false);
      return;
    }

    // Add more validations for other fields as needed...

    // Check if there are any errors
    setError(errors);

    // If there are errors, set "submitted" to false, which prevents the success message from showing
    if (Object.keys(errors).length > 0) {
      setSubmitted(false);
      return;
    }

    // If all validations pass, display success message, clear inputs, and reset errors
    setError({
      name: '',
      email: '',
      mobile: '',
      linkedin: '',
      city: '',
      country: '',
      educations: [],
      workExperiences: [],
      createWorkExperienceFields: [],
      projects: [],
      createProjectFields: [],
    });
    setSubmitted(true);

    setInputs({
      name: '',
      email: '',
      mobile: '',
      linkedin: '',
      city: '',
      country: '',
      educations: [],
      workExperiences: [],
      createWorkExperienceFields: [],
      projects: [],
      createProjectFields: [],
      skills: '', languages: '',
    });


    setError('');
    setSubmitted(true);
    const json = JSON.stringify(inputs);
    console.log(json);
  };

  const isEducationFieldsFilled =
    inputs.educations.length === 0 ||
    inputs.educations.every(
      (edu) =>
        edu.universityName !== '' &&
        edu.city !== '' &&
        edu.country !== '' &&
        edu.startDate !== '' &&
        edu.endDate !== '' &&
        edu.degreeName !== '' &&
        edu.gpa !== '' &&
        edu.relevantCourses !== ''
    );

  const isWorkExperienceFieldsFilled =
    inputs.workExperiences.length === 0 ||
    inputs.workExperiences.every(
      (work) =>
        work.companyName !== '' &&
        work.city !== '' &&
        work.country !== '' &&
        work.startDate !== '' &&
        work.endDate !== '' &&
        work.titlePositionHeld !== '' &&
        work.workDescription !== ''
    );

  const isCreateWorkExperienceFieldsFilled =
    inputs.createWorkExperienceFields.length === 0 ||
    inputs.createWorkExperienceFields.every((createWork) => createWork.text !== '');

  const isProjectFieldsFilled =
    inputs.projects.length === 0 ||
    inputs.projects.every(
      (project) =>
        project.title !== '' &&
        project.date !== '' &&
        project.city !== '' &&
        project.country !== '' &&
        project.position !== '' &&
        project.description !== ''
    );

  const isCreateProjectFieldsFilled =
    inputs.createProjectFields.length === 0 ||
    inputs.createProjectFields.every((createProject) => createProject.text !== '');


  return (
    <div className="form-container">
      <img src={logo} alt="Logo" className="logo" />
      <p className="form-description">
        The purpose of this Information Form is to understand your profile better. Please fill in the details with accuracy and try to avoid unnecessary information, only focus on the valuable parts of your experiences and mention key learnings and achievements.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="personal-information">
          <h2 className="group-heading">
            <span className="label">A</span> Personal Information
          </h2>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={inputs.name} onChange={handleChange} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={inputs.email} onChange={handleChange} required />
          {error && !inputs.email && <div className="error-message">Please enter your email.</div>}

          <label htmlFor="mobile">Mobile Number:</label>
          <input type="text" id="mobile" name="mobile" value={inputs.mobile} onChange={handleChange} required />
          {mobileError.length > 0 && !inputs.mobile && <div className="error-message">Please enter your mobile number.</div>}

          <label htmlFor="linkedin">LinkedIn:</label>
          <input type="text" id="linkedin" name="linkedin" value={inputs.linkedin} onChange={handleChange} required />
          {error && !inputs.linkedin && <div className="error-message">Please provide your LinkedIn link.</div>}

          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={inputs.city} onChange={handleChange} required />
          {error && !inputs.city && <div className="error-message">Please enter your city.</div>}

          <label htmlFor="country">Country:</label>
          <input type="text" id="country" name="country" value={inputs.country} onChange={handleChange} required />
          {error && !inputs.country && <div className="error-message">Please enter your country.</div>}

        </div>

        <div className="education">
          <h2 className="group-heading">
            <span className="label">B</span> Education
          </h2>
          {inputs.educations.map((education, index) => (
            <div key={education.id}>
              {index > 0 && <div className="education-space" />}
              <h3 className="education-heading"> Education {index + 1}</h3>
              <label>University Name:</label>
              <input
                type="text"
                name="universityName"
                value={education.universityName}
                onChange={(event) => handleEducationChange(index, event)}
              />

              <label>City:</label>
              <input
                type="text"
                name="city"
                value={education.city}
                onChange={(event) => handleEducationChange(index, event)}
              />

              <label >Country:</label>
              <input
                type="text"
                name="country"
                value={education.country}
                onChange={(event) => handleEducationChange(index, event)}
              />

              <label>Start Date:</label>
              <input
                type="date"
                name="startDate"
                value={education.startDate}
                onChange={(event) => handleEducationChange(index, event)}
              />

              <label>End Date:</label>
              <input
                type="date"
                name="endDate"
                value={education.endDate}
                onChange={(event) => handleEducationChange(index, event)}
              />

              <label >Degree Name:</label>
              <input
                type="text"
                name="degreeName"
                value={education.degreeName}
                onChange={(event) => handleEducationChange(index, event)}
              />

              <label >GPA:</label>
              <input
                type="text"
                name="gpa"
                value={education.gpa}
                onChange={(event) => handleEducationChange(index, event)}
              />

              <label >Relevant Courses:</label>
              <input
                type="text"
                name="relevantCourses"
                value={education.relevantCourses}
                onChange={(event) => handleEducationChange(index, event)}

              />
            </div>
          ))}

          <div className="add-education">
            <button onClick={handleAddEducation} disabled={!isEducationFieldsFilled}>
              Add Education
            </button>
            {error && <div className="error-message">{error}</div>}
          </div>

        </div>

        <div className="work-experience">
          <h2 className="group-heading">
            <span className="label">C</span> Work Experience
          </h2>
          {inputs.workExperiences.map((experience, index) => (
            <div key={experience.id}>
              {index > 0 && <div className="work-experience-space" />}
              <h3 className="work-experience-heading">Work Experience {index + 1}</h3>
              <label>Company Name:</label>
              <input
                type="text"
                name="companyName"
                value={experience.companyName}
                onChange={(event) => handleWorkExperienceChange(index, event)}

              />

              <label>City:</label>
              <input
                type="text"
                name="city"
                value={experience.city}
                onChange={(event) => handleWorkExperienceChange(index, event)}

              />

              <label >Country:</label>
              <input
                type="text"
                name="country"
                value={experience.country}
                onChange={(event) => handleWorkExperienceChange(index, event)}

              />

              <label >Start Date:</label>
              <input
                type="date"
                name="startDate"
                value={experience.startDate}
                onChange={(event) => handleWorkExperienceChange(index, event)}

              />

              <label >End Date:</label>
              <input
                type="date"
                name="endDate"
                value={experience.endDate}
                onChange={(event) => handleWorkExperienceChange(index, event)}

              />

              <label >Title/Position Held:</label>
              <input
                type="text"
                name="titlePositionHeld"
                value={experience.titlePositionHeld}
                onChange={(event) => handleWorkExperienceChange(index, event)}

              />

              <label >Work Description:</label>
              <textarea
                name="workDescription"
                value={experience.workDescription}
                onChange={(event) => handleWorkExperienceChange(index, event)}

              ></textarea>
            </div>
          ))}

          <div className="add-work-experience">
            <button onClick={handleAddWorkExperience} disabled={!isWorkExperienceFieldsFilled}>
              Add Work Experience
            </button>
            {error && <div className="error-message">{error}</div>}
          </div>

          {inputs.createWorkExperienceFields.map((createWorkExperienceField, index) => (
            <div key={createWorkExperienceField.id} className="create-work-experience">
              {index > 0 && <div className="create-work-experience-space" />}
              <h3 className="create-work-experience-heading">
                Create Work Experience {index + 1}
              </h3>
              <div className="pre-filled-text-container">
                <textarea
                  className="work-experience-textbox"
                  placeholder="Create a work experience in the <Industry Name> with roles such as <Suggested Role1, Role2 etc.>"
                  value={createWorkExperienceField.preWrittenText}
                  onChange={(event) => handleCreateWorkExperienceChange(index, event)}
                />
              </div>
            </div>
          ))}

          <div className="add-create-work-experience">
            <button onClick={handleAddCreateWorkExperience} disabled={!isCreateWorkExperienceFieldsFilled}>
              Create Work Experience
            </button>
          </div>
        </div>


        <div className="projects">
          <h2 className="group-heading">
            <span className="label">D</span> Projects & Extra-curricular Experiences
          </h2>
          {inputs.projects.map((project, index) => (
            <div key={project.id}>
              {index > 0 && <div className="project-space" />}
              <h3 className="project-heading"> Project /Extra-curricular activity {index + 1}</h3>
              <label>Project Title / Extra-curricular Activity Title:</label>
              <input
                type="text"
                name="title"
                value={project.title}
                onChange={(event) => handleProjectChange(index, event)}
              />

              <label>Date:</label>
              <input
                type="date"
                name="date"
                value={project.date}
                onChange={(event) => handleProjectChange(index, event)}
              />

              <label>City:</label>
              <input
                type="text"
                name="city"
                value={project.city}
                onChange={(event) => handleProjectChange(index, event)}
              />

              <label>Country:</label>
              <input
                type="text"
                name="country"
                value={project.country}
                onChange={(event) => handleProjectChange(index, event)}
              />

              <label>Position held:</label>
              <input
                type="text"
                name="position"
                value={project.position}
                onChange={(event) => handleProjectChange(index, event)}
              />

              <label>Description:</label>
              <textarea
                name="description"
                value={project.description}
                onChange={(event) => handleProjectChange(index, event)}
              ></textarea>
            </div>
          ))}

          <div className="add-project">
            <button onClick={handleAddProject} disabled={!isProjectFieldsFilled}>
              Add Project/ Extra curricular experiences
            </button>
            {error && <div className="error-message">{error}</div>}
          </div>


          {inputs.createProjectFields.map((createProjectField, index) => (
            <div key={createProjectField.id} className="create-project">
              {index > 0 && <div className="create-project-space" />}
              <h3 className="create-project-heading">
                Create Project/ Extra-curricular Experience {index + 1}
              </h3>
              <div className="pre-filled-text-container">
                <textarea
                  className="project-description-textbox"
                  placeholder="Create a project in the <Field/Subject Name> and add technical details if necessary."
                  value={createProjectField.text}
                  onChange={(event) => handleCreateProjectChange(index, event)}
                />
              </div>
            </div>
          ))}

          <div className="add-create-project">
            <button onClick={handleAddCreateProject} disabled={!isCreateProjectFieldsFilled}>
              Create Project/ Extra-curricular Experience
            </button>
          </div>
          {error && <div className="error-message">{error}</div>}
        </div>

        <div className="other-information">
          <h2 className="group-heading">
            <span className="label">E</span> Other Information
          </h2>
          <label htmlFor="skills">Skills:</label>
          <input type="text" id="skills" name="skills" value={inputs.skills} onChange={handleChange} />

          <label htmlFor="languages">Languages:</label>
          <input type="text" id="languages" name="languages" value={inputs.languages} onChange={handleChange} />

        </div>



        <div className="submit-container">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
      {error && <div className="error-message">{error}</div>}
      {submitted && <div className="success-message">Form successfully submitted!</div>}
    </div>
  );
};


export default Form;