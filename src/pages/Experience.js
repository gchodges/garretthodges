import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import '../styles/Experience.css';
import ComputerIcon from '@material-ui/icons/Computer';
import WorkIcon from '@material-ui/icons/Work';

function Experience() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#9e1b32'>
            <VerticalTimelineElement className='vertical-timeline-element--education'
            date='2017 - 2021'
            iconStyle={{background: "#9e1b32", color: "#fff"}}
            icon={<SchoolIcon />}>
                <h3 className='vertical-timeline-element-title'>Red Land High School, Lewisberry, PA</h3>
                <ul className='list'>
                    <li>Completed One Computer Science Course</li>
                    <li>Named National Merit Finalist</li>
                    <li>Graduated Salutatorian</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--education'
            date='2021 - Present'
            iconStyle={{background: "#9e1b32", color: "#fff"}}
            icon={<SchoolIcon />}>
                <h3 className='vertical-timeline-element-title'>University of Alabama, Tuscaloosa, AL</h3> 
                <ul className='list'>
                    <li>Pursuing a BS in Computer Engineering</li>
                    <li>STEM Path to MBA</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--education'
            date='March 2022 - Present'
            iconStyle={{background: "#9e1b32", color: "#fff"}}
            icon={<SchoolIcon />}>
                <h3 className='vertical-timeline-element-title'>Ambassador for the College of Engineering, University of Alabama, Tuscaloosa, AL</h3> 
                <ul className='list'>
                    <li>I give tours of the college of engineering to 15 prospective students per semester</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--work'
            date='August 2022 - Present'
            iconStyle={{background: "#ffd275", color: "#fff"}}
            icon={<WorkIcon />}>
                <h3 className='vertical-timeline-element-title'>Celsius Holdings, Campus Representative</h3>
                <p>I am a part-time employee of Celsius Holdings. I work to distribute Celsius energy drinks to students
                    on campus as well as plan events with attendance reaching up to 1000 students. I also have to communicate effectively with my
                    supervisors as well as manage inventory of product and event assets.
                </p>

            </VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--education'
            date='August 2022 - Present'
            iconStyle={{background: "#ffd275", color: "#fff"}}
            icon={<ComputerIcon />}>
                <h3 className='vertical-timeline-element-title'>Alabama Astrobotics, Software Team</h3>
                <p>I joined Alabama Astrobotics to immerse myself in the software engineering community and develop my
                    knowledge as a programmer. Through this experience I have learned some software engineering best practices and 
                    learned to collaborate with others using GitLab.
                </p>

            </VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--education'
            date='October 2022 - Present'
            iconStyle={{background: "#9e1b32", color: "#fff"}}
            icon={<SchoolIcon />}>
                <h3 className='vertical-timeline-element-title'>Sigma Phi Epsilon AL Beta Chapter, Vice President of Operations</h3>
                <p>I was elected as the Vice President of Operations of my fraternity by 180 of my peers. I manage a housing complex with
                    30 residents as well as a budget of about $60,000 to improve the fraternity house for members. I also communicate with
                    a national housing corporation on a regular basis to ensure that house operations run smoothly.
                </p>

            </VerticalTimelineElement>

        </VerticalTimeline>

    </div>
  )
}

export default Experience