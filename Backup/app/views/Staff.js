import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import StaffCell from '../components/StaffCell';
import data from '../data/staff';
import AboutLayout from '../layouts/AboutLayout';

const Staff = () => (
  <AboutLayout>
    <Helmet title="About" />
    <article className="about-post" id="staff">
      <header>
        <div className="about-title">
          <h2><Link to="/about">About Us</Link></h2>
        </div>

      </header>
      <div className="company-summary">
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
                excepturi sint occaecati cupiditate non provident, similique sunt in culpa 
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et 
                harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
                cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod 
                maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor 
                repellendus</p>
        </div>
      {data.map((staff) => (
        <StaffCell
          data={staff}
          key={staff.name}
        />
      ))}
    </article>
  </AboutLayout>
);

export default Staff;
