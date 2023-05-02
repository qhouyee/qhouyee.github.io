import React from 'react';
import './skillcomponent.scss';
import { NavLink } from "react-router-dom";
import { ReactComponent as CssIcon } from '../assets/svg/software/css.svg';
import { ReactComponent as DockerIcon } from '../assets/svg/software/docker.svg';
import { ReactComponent as FlaskIcon } from '../assets/svg/software/flask.svg';
import { ReactComponent as GitIcon } from '../assets/svg/software/git.svg';
import { ReactComponent as HtmlIcon } from '../assets/svg/software/html.svg';
import { ReactComponent as JavaIcon } from '../assets/svg/software/java.svg';
import { ReactComponent as JSIcon } from '../assets/svg/software/javascript.svg';
import { ReactComponent as LinuxIcon } from '../assets/svg/software/linux.svg';
import { ReactComponent as MavenIcon } from '../assets/svg/software/maven.svg';
import { ReactComponent as MongoIcon } from '../assets/svg/software/mongodb.svg';
import { ReactComponent as NodeIcon } from '../assets/svg/software/node.svg';
import { ReactComponent as PostgresIcon } from '../assets/svg/software/postgresql.svg';
import { ReactComponent as PythonIcon } from '../assets/svg/software/python.svg';
import { ReactComponent as ReactIcon } from '../assets/svg/software/react.svg';
import { ReactComponent as TSIcon } from '../assets/svg/software/typescript.svg';
import { ReactComponent as ViteIcon } from '../assets/svg/software/vite.svg';
import { ReactComponent as WebpackIcon } from '../assets/svg/software/webpack.svg';
import { ReactComponent as WindowsIcon } from '../assets/svg/software/windows.svg';

export interface ISkillComponentProps {
  isComplete: boolean;
}

const SkillComponent: React.FC<ISkillComponentProps> = ({ isComplete }: ISkillComponentProps) => {
  if (isComplete) {
    return (
      <div className="masonry-with-columns" id="masonry-with-columns">
        <div className="blur">
          <h3>Programming Languages</h3>
          <p><JavaIcon className='skill-svg' /><PythonIcon className='skill-svg' /><TSIcon className='skill-svg' />
            <JSIcon className='skill-svg' /><HtmlIcon className='skill-svg' /><CssIcon className='skill-svg' /></p>
        </div>
        <div className="blur">
          <h3>Database</h3>
          <p><MongoIcon className='skill-svg' /> <PostgresIcon className='skill-svg' /></p>
        </div>
        <div className="blur">
          <h3>Framework</h3>
          <p><FlaskIcon className='skill-svg' /> <ReactIcon className='skill-svg' /></p>
        </div>
        <div className="blur">
          <h3>Operating system</h3>
          <p><LinuxIcon className='skill-svg' />  <WindowsIcon className='skill-svg' /></p>
        </div>
        <div className="blur">
          <h3>DevOps</h3>
          <p><GitIcon className='skill-svg' />  <DockerIcon className='skill-svg' />
            <WebpackIcon className='skill-svg' />  <NodeIcon className='skill-svg' />
            <MavenIcon className='skill-svg' />  <ViteIcon className='skill-svg' /></p>
        </div>
        <div className="blur">
          <h3>Testing</h3>
          <p>JUnit, Mockito, Pytest</p>
        </div>
        <div className="blur">
          <h3>API</h3>
          <p>Postman, REST, Java Servlet</p>
        </div>
        <div className="blur">
          <h3>Modelling software</h3>
          <p>Sketchup, Revit</p>
        </div>
        <div className="blur">
          <h3>Geospatial software</h3>
          <p>ArcGIS, QGIS, Mapbox, Cesium</p>
        </div>
        <div className="blur">
          <h3>Semantic Web</h3>
          <p>SPARQL, RDF, OWL, Blazegraph (NoSQL)</p>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className='grid-container content-bottom-spacing'>
          <div><JavaIcon className='grid-skill-svg' /></div>
          <div><PythonIcon className='grid-skill-svg' /></div>
          <div><HtmlIcon className='grid-skill-svg' /></div>
          <div><TSIcon className='grid-skill-svg' /></div>
          <div><JSIcon className='grid-skill-svg' /></div>
          <div><CssIcon className='grid-skill-svg' /></div>
          <div><PostgresIcon className='grid-skill-svg' /></div>
          <div><DockerIcon className='grid-skill-svg' /></div>
          <div><GitIcon className='grid-skill-svg' /></div>
        </div>
        <p className='content-bottom-spacing'>For the complete list, please click <NavLink to="/background" end>here</NavLink></p>
      </>
    );
  }
}

export default SkillComponent;