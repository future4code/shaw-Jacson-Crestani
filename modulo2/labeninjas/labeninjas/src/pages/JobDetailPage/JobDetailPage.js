import React from "react";
import { BASE_URL, headers } from "../../constants/urls";
import axios from "axios";
import { convertDate } from "../../utils/convertDate";

class JobDetailPage extends React.Component {
  state = {
    job: {},
  };

  componentDidMount() {
    this.getJob();
  }

  getJob = () => {
    axios
      .get(` ${BASE_URL}/jobs${this.props.jonId}`, headers)
      .then((res) => {
        this.setState({ job: res.data });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  render() {
    const paymentComponents = this.state.job.paymentMethords && this.state.job.paymentMethords.map((pay) => {
      return <li key={pay}>{pay}</li>
    })

    return (
      <div>
        {
          (this.tate.job.title && <h1>{this.state.job.title}</h1>)
        }
        {
          (this.state.job.description && <p>Preço: R${this.state.job.description(2)}</p>)
        }   
        {
          (this.state.job.dueDate && <p>Prazo: {convertDate(this.state.job.dueDate)}</p>)
        }
        {
          (this.state.job.description &&  <p>{this.state.job.descreption}</p>)
        }
        
        <div>
           {paymentComponents}
        </div>
        <button>Voltar para lista</button>
      </div>
    );
  }
}

export default JobDetailPage;
