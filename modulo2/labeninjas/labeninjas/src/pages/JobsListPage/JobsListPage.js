import React from "react";
import JobCard from "../../components/JobCard/JobCard";
import axios from "axios";
import { BASE_URL, headers } from "../../constants/urls";
import { JobListContainer } from "./styled";

class JobsListPage extends React.Component {
  state = {
    jobsList: [],
  };

  componentDidMount() {
    this.getJobs();
  }

  getJobs = () => {
    axios
      .get(`${BASE_URL}/jobs`, headers)
      .then((res) => {
        this.setState({ jobsList: res.data.jobs });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  render() {
    const jobComponents = this.state.jobsList.map((job) => {
      return <JobCard key={job.id} job={job} />;
    });

    return <JobListContainer>
              {jobComponents}
            </JobListContainer>;
  }
}

export default JobsListPage;
