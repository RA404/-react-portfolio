import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import { metaAdder } from '../helpers/metaAdder';

function Experience() {

  useEffect(() => {
    document.title = 'Repin Andrei - Experience';
    metaAdder('description', "My work experience");
  });

  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#6B1049'>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='January 2022 - Present'
          iconStyle={{ background: '#6B1049', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Full Stack Web Developer</h3>
          <h4 className='vertical-timeline-element-subtitle'>OnPageConversion (Vaughan, Canada)</h4>
          <p><b>Stack:</b> JavaScript, TypeScript, React, Node.js, Express, html, css, MobX, Redux, Python, Django, DRF</p>
          <ul>
            <li>Built the personal account app for Universal School of Negotiation from scratch</li>
            <li>Developed telegram bots for sending reports for CEOs and receiving reports on request</li>
            <li>Designed a dashboard for company owners to track key indicators in real time</li>
            <li>Created and supported websites and landing pages</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='August 2012 - December 2021'
          iconStyle={{ background: '#6B1049', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Technical lead</h3>
          <h4 className='vertical-timeline-element-subtitle'>"Tekh-Met" ltd, Yekaterinburg</h4>
          <p>
            Duties: Managing IT department with 5 developers, web-sites development for different products, organising a cooperation with sub-contractors
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='June 2009 - July 2012'
          iconStyle={{ background: '#6B1049', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Computer Programmer</h3>
          <h4 className='vertical-timeline-element-subtitle'>"Kloss Services Corporation" ltd, Yekaterinburg</h4>
          <p>
          Duties: New software development, updating of the existing software according to the customer's needs, technical tasks writing and completion.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='August 2006 - December 2008'
          iconStyle={{ background: '#6B1049', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Computer Programmer</h3>
          <h4 className='vertical-timeline-element-subtitle'>"Mirex, LaserCraft" ltd, Yekaterinburg</h4>
          <p>
          Duties: New software development, updating of the existing software according to the customer's needs, technical tasks writing and completion.
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience