import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Cell from '../components/Projects/Cell';
import data from '../data/projects';
import PortfolioLayout from '../layouts/PortfolioLayout';

const Portfolio = () => (
  <PortfolioLayout>
    <Helmet title="Portfolio" />
    <article className="post" id="projects">
      <header>
        <div className="title" style={{color: ""}}>
          <h2><Link to="/portfolio">Portfolio</Link></h2>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </PortfolioLayout>
);

export default Portfolio;
