import React from 'react';
import './skillcomponent.scss';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { simpleVariants, iconVariants, skillCardVariants, paragraphVariants } from '../../variant/variants';
import { ReactComponent as CssIcon } from '../../svg/software/css.svg';
import { ReactComponent as DockerIcon } from '../../svg/software/docker.svg';
import { ReactComponent as FlaskIcon } from '../../svg/software/flask.svg';
import { ReactComponent as GitIcon } from '../../svg/software/git.svg';
import { ReactComponent as HtmlIcon } from '../../svg/software/html.svg';
import { ReactComponent as JavaIcon } from '../../svg/software/java.svg';
import { ReactComponent as JSIcon } from '../../svg/software/javascript.svg';
import { ReactComponent as LinuxIcon } from '../../svg/software/linux.svg';
import { ReactComponent as MavenIcon } from '../../svg/software/maven.svg';
import { ReactComponent as MongoIcon } from '../../svg/software/mongodb.svg';
import { ReactComponent as NodeIcon } from '../../svg/software/node.svg';
import { ReactComponent as PostgresIcon } from '../../svg/software/postgresql.svg';
import { ReactComponent as PythonIcon } from '../../svg/software/python.svg';
import { ReactComponent as ReactIcon } from '../../svg/software/react.svg';
import { ReactComponent as TSIcon } from '../../svg/software/typescript.svg';
import { ReactComponent as ViteIcon } from '../../svg/software/vite.svg';
import { ReactComponent as WebpackIcon } from '../../svg/software/webpack.svg';
import { ReactComponent as WindowsIcon } from '../../svg/software/windows.svg';

export interface ISkillComponentProps {
  isComplete: boolean;
}

const SkillComponent: React.FC<ISkillComponentProps> = ({ isComplete }: ISkillComponentProps) => {
  if (isComplete) {
    return (
      <div className="masonry-with-columns" id="masonry-with-columns">
        <motion.div initial='hidden' whileInView='visible' whileHover='hover' viewport={{ once: true }} variants={skillCardVariants(0)}>
          <h3>Programming Languages</h3>
          <p><JavaIcon className='skill-svg' /><PythonIcon className='skill-svg' /><TSIcon className='skill-svg' />
            <JSIcon className='skill-svg' /><HtmlIcon className='skill-svg' /><CssIcon className='skill-svg' /></p>
        </motion.div>
        <motion.div initial='hidden' whileInView='visible' whileHover='hover' variants={skillCardVariants(0)} viewport={{ once: true }}>
          <h3>Database</h3>
          <p><MongoIcon className='skill-svg' /> <PostgresIcon className='skill-svg' /></p>
        </motion.div>
        <motion.div initial='hidden' whileInView='visible' whileHover='hover' variants={skillCardVariants(0)} viewport={{ once: true }}>
          <h3>Framework</h3>
          <p><FlaskIcon className='skill-svg' /> <ReactIcon className='skill-svg' /></p>
        </motion.div>
        <motion.div initial='hidden' whileInView='visible' whileHover='hover' variants={skillCardVariants(0)} viewport={{ once: true }}>
          <h3>Operating system</h3>
          <p><LinuxIcon className='skill-svg' />  <WindowsIcon className='skill-svg' /></p>
        </motion.div>
        <motion.div initial='hidden' whileInView='visible' whileHover='hover' variants={skillCardVariants(0)} viewport={{ once: true }}>
          <h3>DevOps</h3>
          <p><GitIcon className='skill-svg' />  <DockerIcon className='skill-svg' />
            <WebpackIcon className='skill-svg' />  <NodeIcon className='skill-svg' />
            <MavenIcon className='skill-svg' />  <ViteIcon className='skill-svg' /></p>
        </motion.div>
        <motion.div initial='hidden' whileInView='visible' whileHover='hover' variants={skillCardVariants(0)} viewport={{ once: true }}>
          <h3>Testing</h3>
          <p>JUnit, Mockito, Pytest</p>
        </motion.div>
        <motion.div initial='hidden' whileInView='visible' whileHover='hover' variants={skillCardVariants(0)} viewport={{ once: true }}>
          <h3>API</h3>
          <p>Postman, REST, Java Servlet</p>
        </motion.div>
        <motion.div initial='hidden' whileInView='visible' whileHover='hover' variants={skillCardVariants(0)} viewport={{ once: true }}>
          <h3>Modelling software</h3>
          <p>Sketchup, Revit</p>
        </motion.div>
        <motion.div initial='hidden' whileInView='visible' whileHover='hover' variants={skillCardVariants(0)} viewport={{ once: true }}>
          <h3>Geospatial software</h3>
          <p>ArcGIS, QGIS, Mapbox, Cesium</p>
        </motion.div>
        <motion.div initial='hidden' whileInView='visible' whileHover='hover' variants={skillCardVariants(0)} viewport={{ once: true }}>
          <h3>Semantic Web</h3>
          <p>SPARQL, RDF, OWL, Blazegraph (NoSQL)</p>
        </motion.div>
      </div>
    );
  } else {
    return (
      <>
        <motion.div initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.6 }} variants={simpleVariants(true)}
          className='grid-container content-bottom-spacing'>
          <motion.div variants={iconVariants}><JavaIcon className='grid-skill-svg' /></motion.div>
          <motion.div variants={iconVariants}><PythonIcon className='grid-skill-svg' /></motion.div>
          <motion.div variants={iconVariants}><HtmlIcon className='grid-skill-svg' /></motion.div>
          <motion.div variants={iconVariants}><TSIcon className='grid-skill-svg' /></motion.div>
          <motion.div variants={iconVariants}><JSIcon className='grid-skill-svg' /></motion.div>
          <motion.div variants={iconVariants}><CssIcon className='grid-skill-svg' /></motion.div>
          <motion.div variants={iconVariants}><PostgresIcon className='grid-skill-svg' /></motion.div>
          <motion.div variants={iconVariants}><DockerIcon className='grid-skill-svg' /></motion.div>
          <motion.div variants={iconVariants}><GitIcon className='grid-skill-svg' /></motion.div>
        </motion.div>
        <motion.p initial='hidden' whileInView='visible' variants={paragraphVariants(1)} viewport={{ once: true }}
          className='content-bottom-spacing'>
          For the complete list, please click <NavLink to="/background" end>here</NavLink>
        </motion.p>
      </>
    );
  }
}

export default SkillComponent;