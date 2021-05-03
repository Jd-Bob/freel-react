import React from 'react';
import Typography from '@material-ui/core/Typography';

import { experiences } from '../data/project';

export default function ExperienceDetails(props) {
  const id = `${props.match.params.id}`.split('-');
  const project = experiences[id[0]].find(exp => (exp.name === id[1]));

  return (
    <div>
        <img alt="complex" src={process.env.PUBLIC_URL + project.image} 
        style={{maxHeight: '350px', maxWidth: '350px'}}/>
        <h1>{project.link}</h1>
        <Typography gutterBottom variant="body2">
          framework: {project.techno[0].framework}
        </Typography>
        <Typography gutterBottom variant="body2">
          domaine: {project.domain}
        </Typography>
  </div>
  );
}