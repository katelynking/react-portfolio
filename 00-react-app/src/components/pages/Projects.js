import React from 'react';

import familyCookbook from './img/project-imgs/family-cookbook.gif';
import musicCharts from './img/project-imgs/music-charts-and-concerts-1.png'
import notetaker from './img/project-imgs/new-note-created.png'
import weatherDash from './img/project-imgs/weather-dash.png'
import workDay from './img/project-imgs/workday-scheduler.gif'

export default function Projects() {
  return (
    <div className='row'>
      <div className='col-xxl-6'>
      <h1>projects</h1>

      </div>

      <div className='col-xxl-12 centered'>
      <a href='#'>
        <img src={familyCookbook} className='project-img'></img>
      </a>

      <a href='#'>
        <img src={weatherDash} className='project-img'></img>
      </a>

      <a href='#'>
        <img src={musicCharts} className='project-img'></img>
      </a>

      <a href='#'>
        <img src={notetaker} className='project-img'></img>
      </a>

      <a href='#'>
        <img src={workDay} className='project-img'></img>
      </a>


      </div>


    </div>
  );
}
