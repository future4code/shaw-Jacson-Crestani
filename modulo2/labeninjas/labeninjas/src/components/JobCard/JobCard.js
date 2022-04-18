import React from "react";
import { convertDate } from "../../utils/convertDate";
import { Card } from "./styled";

const JobCard = (props) => {
    return (
        <Card>
        <h3>{props.job.title}</h3>
        <p><b>Preço:</b> R${props.job.price.toFixed(2)}</p>
        <p><b>Prazo:</b> {convertDate(props.job.dueDate)}</p>
        <button>Ver detalhes</button>
        <button>Adicionar no Carrinho</button>
        </Card>
    );
}

export default JobCard;