import React, { useState } from 'react';
import './style.less';

function prev() {
  const { current, props: { steps }, changeStep, onStepChange } = this;
  if (current < 0) return;
  changeStep(current - 1);
  onStepChange && onStepChange(steps[current - 1]);
}

function next() {
  const { current, props: { steps }, changeStep, onStepChange } = this;
  if (current + 1 > steps.length) return;
  changeStep(current + 1);
  onStepChange && this.onStepChange(steps[current + 1]);
}

const Steps = props => {
  const { steps, currentStep = 0, onStepChange } = props;
  const [current, changeStep] = useState(currentStep);
  Steps.props = props;
  Steps.current = current;
  Steps.changeStep = changeStep;
  Steps.onStepChange = onStepChange;
  return (
    <div className='step-wrapper'>
      {
        steps &&
        !!steps.length &&
        steps.map((step, idx, arr) => (
          <div className='step-gap-box' key={idx}>
            <div
              className='step-item'
            >
              <div className={`step-item-index ${(current >= idx) && 'step-item-index-actived'}`}>{idx + 1}</div>
              <div className={`step-item-title ${(current >= idx) && 'step-item-title-actived'}`}>{step.title}</div>
            </div>
            {
              (idx + 1 !== arr.length) &&
              <span className={`step-line ${(current > idx) && 'step-line-actived'}`} key={idx} />
            }
          </div>
        ))
      }
    </div>
  )
}

Steps.next = next;
Steps.prev = prev;

export { Steps }