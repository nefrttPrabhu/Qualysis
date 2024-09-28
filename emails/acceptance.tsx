import { Button, Html, Head, Preview, Body, Text, Container } from "@react-email/components";
import * as React from "react";

interface iAcceptanceEmailParams {
  candidateName: string,
  companyName: string,
  role: string
}
export default function AcceptanceEmail({ candidateName, companyName, role }: iAcceptanceEmailParams) {
  return (
    <Html>
      <Head>
        <Preview>
          Congrats! You have been accepted!
        </Preview>
        <Body style={main}>
          <Container style={container}>
            <Text>Hi, {candidateName}</Text>
            <Text>{`Dear ${candidateName},\n\nI am delighted to extend this formal offer to you for the position of ${companyName} at ${companyName}. After careful consideration of your qualifications and experience, we believe that you will be a valuable addition to our team.We are excited about the opportunity to work with you and confident that you will make significant contributions to our organization. Your skills and experience align perfectly with what we are looking for in this role.\n\nPlease review the attached offer letter, which outlines the terms and conditions of your employment with [Company_Name].`}</Text>
            <Text>{`If you have any questions or need further clarification, please do not hesitate to reach out to me.\n\nOnce you have reviewed the offer and are ready to accept, please sign and return the offer letter by [Deadline_Date].`}</Text>
            <Text>{`Upon receipt of your acceptance, we will proceed with the necessary paperwork to formalize your employment.\n\nWe look forward to welcoming you to the team and working together to achieve our goals.\n\nCongratulations once again, and welcome to ${companyName}!`}</Text>

            <Text>{"Warm Regards"}</Text>
            <Text>{"Company Name"}</Text>
          </Container>
        </Body>
      </Head>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};