import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as ErrorImg } from "../assets/pg_not_found.svg";
import { Container, Typography } from "@mui/material";

//404 Page seen when accessing part of site that does not exist

export default function ErrorPage() {

    return (
        <ErrorContainer>
            <ErrorTxt align='center'>Uh oh! Looks like we got lost!</ErrorTxt>
             <ErrorImgStyled />
        </ErrorContainer>
    )
};

// Styles for error page located here 
const ErrorContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

const ErrorTxt = styled(Typography)`
    color: #895cf2;
    font-size: 3rem;
    font-weight: 600;
    margin-top: 10rem;
    margin-bottom: 2rem;

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;

const ErrorImgStyled = styled(ErrorImg)`

    @media (max-width: 480px) {
        height: 180px;
    }

    @media (min-width: 481px) and (max-width: 1200px) {
        height: 400px;
    }

`;