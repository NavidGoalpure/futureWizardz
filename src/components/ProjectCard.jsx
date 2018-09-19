/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Wrapper = styled.a`
  width: 100%;
  ${tw('shadow-lg relative no-underline rounded-lg px-8 py-16 text-white')};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`;

const Text = styled.div`
  text-align: left;
`;

const Title = styled.div`
  ${tw('text-white  text-1xl md:text-2xl xl:text-1xl tracking-wide  pt-8')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  font-weight: bold;
`;

const ProjectCard = ({ title, link, children, bg }) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer" bg={bg}>
    <Title>{children}</Title>
    <Text>{title}</Text>
  </Wrapper>
);

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  bg: PropTypes.string.isRequired,
};
