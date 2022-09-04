import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';

function Experience() {

  useEffect(() => {
    document.title = 'Repin Andrei - Education';;
  });

  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#03032D'>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='September 2022 - December 2022'
          iconStyle={{ background: '#03032D', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>edX: HarvardX CS50W</h3>
          <h4 className='vertical-timeline-element-subtitle'>CS50's Web Programming with Python and JavaScript</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='April 2022 - July 2022'
          iconStyle={{ background: '#03032D', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Preparation for admission to US universities</h3>
          <p>MSc in Data Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='November 2020 - October 2021'
          iconStyle={{ background: '#03032D', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Yandex Practicum</h3>
          <h4 className='vertical-timeline-element-subtitle'>Python Backend Developer</h4>
          <p>I was a tech lead on a team project</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='September 2019 - June 2020'
          iconStyle={{ background: '#03032D', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Yandex Practicum</h3>
          <h4 className='vertical-timeline-element-subtitle'>Web Developer</h4>
          <p>After completing the course, I became a senior student to help other students learn web development</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='April 2012 - April 2013'
          iconStyle={{ background: '#03032D', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Higher School of Economics</h3>
          <h4 className='vertical-timeline-element-subtitle'>Yekaterinburg</h4>
          <p>Mini MBA – Career (management)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='September 2011 - September 2012'
          iconStyle={{ background: '#03032D', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Higher School of Economics</h3>
          <h4 className='vertical-timeline-element-subtitle'>Yekaterinburg</h4>
          <p>Financial Management</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='September 2006 - June 2010'
          iconStyle={{ background: '#03032D', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Ural State Technical University, Yekaterinburg</h3>
          <h4 className='vertical-timeline-element-subtitle'>Department of Applied Computer Science in Economics</h4>
          <p>Bachelor (Specialist) Degree in Applied Computer Science in Economics</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='September 2003 - June 2006'
          iconStyle={{ background: '#03032D', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Ural Technological College, Sverdlovsk Region</h3>
          <h4 className='vertical-timeline-element-subtitle'>Department of Software Engineering for Computers and Computer-based Systems</h4>
          <p>Technician (Vocational qualification, diploma)</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience