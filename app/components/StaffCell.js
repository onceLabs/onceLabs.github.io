import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import url from 'url';

const StaffCell = ({ data }) => (
  <article className="about-post" id="staffCell">
  <header>
  <div className="row">
    <div className="leftImage">
            <img src={data.image} alt="" />
          </div>
      <div className="rightText">
        <h3 className="staff-name">{data.name}</h3>
        <h4 className="role-title">{data.role}</h4>
      <div>
        <p className="staff-description">{data.desc}</p>
      </div>
      </div>
  </div>
  </header>
  </article>
);

StaffCell.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default StaffCell;

//<img src={`${BASE_PATH}${data.image}`} alt={data.title} /><--!-->
//<img src={url.resolve(BASE_PATH, data.image)} alt={data.title} />