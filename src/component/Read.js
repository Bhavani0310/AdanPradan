import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 50px 20px;
  min-height: 50vh;
  
`;

const Column = styled.div`
  flex: 1 1 300px;
  margin: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Read = () => {
  return (
    <PageContainer>
      <Column>
        <Title>WorkShops</Title>
        <Paragraph>
          We offer a variety of workshops on various technologies and IoT (Internet of Things) related topics. 
          Whether you're interested in learning about web development, mobile app development, data science, 
          artificial intelligence, or IoT, we have workshops designed to enhance your skills and knowledge.
        </Paragraph>
        <Button>More Info</Button>
      </Column>
      <Column>
        <Title>Colleges</Title>
        <Paragraph>
          Our website collaborates with several prestigious colleges and universities to provide quality 
          educational resources and opportunities. These collaborations enable students to access courses, 
          workshops, and other educational materials to supplement their learning experience and career development.
        </Paragraph>
        <Button>More Info</Button>
      </Column>
    </PageContainer>
  );
};

export default Read;
