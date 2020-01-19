import React, { useState, useEffect, Fragment } from 'react';
import './style.less';

const Tabs = props => {
  const { defaultKey = 0, tabs = [], onTabChange, border = false, field = 'title' } = props;
  let legalDefaultKey = 0;
  if (defaultKey < 0) {
    legalDefaultKey = 0;
  } else if (defaultKey > tabs.length - 1) {
    legalDefaultKey = tabs.length - 1;
  }
  const [currentActiveTab, changeTab] = useState(legalDefaultKey);
  Tabs.changeTab = changeTab;
  useEffect(() => {
    onTabChange(tabs[currentActiveTab], currentActiveTab);
  }, [currentActiveTab]);
  const wrapperCls = classNames(
    'galaxy-tabs-wrapper',
    border ? 'galaxy-tab-border' : null
  )
  return (
    <div className={wrapperCls}>
      <ul className='galaxy-tabs'>
        {
          tabs &&
          !!tabs.length &&
          tabs.map(({ [field]: title }, idx) => {
            const isCurrent = currentActiveTab === idx;
            return (
              <Fragment key={idx}>
                <li
                  className={`galaxy-tab-item ${isCurrent ? 'galaxy-active' : ''}`}
                  onClick={() => {
                    if (isCurrent) return;
                    Tabs.changeTab(idx);
                  }}
                >
                  <span className='galaxy-tab-label'>{title}</span>
                </li>
                <i className='galaxy-tab-underline' style={{ left: currentActiveTab * 80 }} />
              </Fragment>
            )
          })
        }
      </ul>
      <div className='galaxy-tab-content'>
        {props.children[currentActiveTab]}
      </div>
    </div>
  )
}

export { Tabs }