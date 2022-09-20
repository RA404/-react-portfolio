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
          date='January 2022 - March 2022'
          iconStyle={{ background: '#6B1049', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Teach Lead</h3>
          <h4 className='vertical-timeline-element-subtitle'>"Talk-ed" ltd, Yekaterinburg</h4>
          <p>Duties: MVP and IT architecture development, assembling the team of developers, code review, product technical refinement and technical support.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='August 2012 - December 2021'
          iconStyle={{ background: '#6B1049', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Teach Lead (Mostly 1C:Enterprise)</h3>
          <h4 className='vertical-timeline-element-subtitle'>"Tekh-Met" ltd, Yekaterinburg</h4>
          <p>
            Duties: Managing IT department with 5 developers, web-sites development for different products, organising a cooperation with sub-contractors
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='June 2009-May 2012'
          iconStyle={{ background: '#6B1049', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Computer Programmer (1C:Enterprise)</h3>
          <h4 className='vertical-timeline-element-subtitle'>"Kloss Services Corporation" ltd, Yekaterinburg</h4>
          <p>
          Duties: New software development, updating of the existing software according to the customer's needs, technical tasks writing and completion.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='January 2009-May 2009'
          iconStyle={{ background: '#6B1049', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Computer Programmer (1C:Enterprise)</h3>
          <h4 className='vertical-timeline-element-subtitle'>"AS-Deprix" ltd, Yekaterinburg</h4>
          <p>
          Duties: New software development, updating of the existing software according to the customer's needs, technical tasks writing and completion.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='August 2006-December 2008'
          iconStyle={{ background: '#6B1049', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Computer Programmer (1C:Enterprise)</h3>
          <h4 className='vertical-timeline-element-subtitle'>"Ural Electronic Plant" ltd, Yekaterinburg</h4>
          <p>
          Duties: New software development, updating of the existing software according to the customer's needs, technical tasks writing and completion.
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience