import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

function Experience() {

  useEffect(() => {
    document.title = 'Repin Andrei - Experience';;
  });

  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='January 2022 - March 2022'
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Teach Lead</h3>
          <h4 className='vertical-timeline-element-subtitle'>"Talk-ed" ltd, Yekaterinburg</h4>
          <p>Duties: MVP and IT architecture development, assembling the team of developers, code review, product technical refinement and technical support.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='November 2020 - October 2021'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Yandex Practicum</h3>
          <h4 className='vertical-timeline-element-subtitle'>Python Backend Developer</h4>
          <p>I was a tech lead on a team project</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='September 2019 - June 2020'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Yandex Practicum</h3>
          <h4 className='vertical-timeline-element-subtitle'>Web Developer</h4>
          <p>After completing the course, I became a senior student to help other students learn web development</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='August 2012 - December 2021'
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Teach Lead</h3>
          <h4 className='vertical-timeline-element-subtitle'>"Tekh-Met" ltd, Yekaterinburg</h4>
          <p>
            Duties: Managing IT department with 5 developers, web-sites development for different products, organising a cooperation with sub-contractors
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='April 2012 - April 2013'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Higher School of Economics</h3>
          <h4 className='vertical-timeline-element-subtitle'>Yekaterinburg</h4>
          <p>Mini MBA – Career (management)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='September 2011 - September 2012'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Higher School of Economics</h3>
          <h4 className='vertical-timeline-element-subtitle'>Yekaterinburg</h4>
          <p>Financial Management</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='August 2006 - May 2012'
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Computer Programmer (1C:Enterprise)</h3>
          <br />
          <h5 className='vertical-timeline-element-subtitle'>"Kloss Services Corporation" ltd (June 2009-May 2012)</h5>
          <h5 className='vertical-timeline-element-subtitle'>"AS-Deprix" ltd (January 2009-May 2009)</h5>
          <h5 className='vertical-timeline-element-subtitle'>"Ural Electronic Plant" ltd (August 2006-December 2008)</h5>
          <p>
            Duties: New software development, updating of the existing software according to the customer's needs, technical tasks writing and completion.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='September 2006 - June 2010'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Ural State Technical University, Yekaterinburg</h3>
          <h4 className='vertical-timeline-element-subtitle'>Department of Applied Computer Science in Economics</h4>
          <p>Bachelor (Specialist) Degree in Applied Computer Science in Economics</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='September 2003 - June 2006'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
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