import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Button } from './../index.js';

describe('Button component test', () => {
  it('Button title renders correctly with props', () => { 
    const dummyProps = {
      title: 'subscribe'
    };
    const onClick = ()=>{console.log('lol');}
    const button = shallow(
      <Button
          title={dummyProps.title}
          onClick={onClick}
      />
    );
    const tree = toJson(button);
    
    expect(button.instance().props.title).toBe(dummyProps.title);
    expect(tree).toMatchSnapshot();
  }); 
});
