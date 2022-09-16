import React from "react";
import $ from './index.module.scss'

const Loader = () => {
  return (
    <div className={$.loader}>
      <div className={$.loaderdDot} />
      <div className={$.loaderdDot} />
      <div className={$.loaderdDot}/>
      <div className={$.loaderdDot} />
      <div className={$.loaderdDot}/>
      <div className={$.loaderdDot} />
    </div>
  );
};

export default Loader;
