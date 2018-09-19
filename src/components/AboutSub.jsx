/* global tw */
import React from 'react';
import styled from 'react-emotion';

const LongSub = styled.p`
  ${tw('hidden sm:block text-grey-light text-sm  md:text-2xl lg:text-3xl   pt-6 md:pt-12 text-justify')};
`;

const ShortSub = styled.p`
  ${tw('block sm:hidden text-grey-light text-md   pt-6 md:pt-12 text-justify')};
`;

const AboutSub = () => (
  <div>
    <LongSub>
      نوید گل پور مدرس این دوره، برنامه نویس حوزه های مختلف کامپیوتری از جمله Front-End. Back-End, Mobile, BlockChain
      است که تجربه زیادی در کار کردن با نوجوانان دارد. برگزاری دوره های مختلف آموزشی برای آنان در کنار دانش برنامه نویسی
      او را فرد کاملا مناسبی برای برگزاری این دوره آموزشی نموده است
    </LongSub>
    <ShortSub>
      نوید گل پور مدرس این دوره، برنامه نویس کامپیوتری است که تجربه زیادی در کار کردن با نوجوانان دارد. برگزاری دوره های
      مختلف آموزشی برای آنان در کنار دانش برنامه نویسی او را فرد کاملا مناسبی برای برگزاری این دوره نموده است
    </ShortSub>
  </div>
);

export default AboutSub;
