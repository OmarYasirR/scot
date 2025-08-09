import React from 'react'

const Talk = () => {
  return (
    <div>

    <div className='cont'>
      <h2>Good people stablishes trust</h2>
      <p>Do you have a project in mind?</p>
      <div className="btn">LET S TALK</div>
    </div>
    <style jsx>{`
    .cont {
      display: flex;
      margin: 50px 0;
      text-align: center;
      gap: 15px;
      background-color: var(--main);
      flex-direction: column;
      padding: 30px 0;
      align-items: center;
    }
    `}</style>
    </div>
  )
}

export default Talk