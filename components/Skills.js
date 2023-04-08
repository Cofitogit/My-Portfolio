import { skills } from '../profile';

export const Skills = () => (
  <>
    {skills.map(({ skill, percentage }, i) => (
      <div className='px-4 text-light d-grid py-4 gap-3' key={i}>
        <h5 className='fw-light'>{skill}</h5>
        <div className='progress'>
          <div
            className='progress-bar bg-dark'
            role='progressbar'
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    ))}
  </>
);
