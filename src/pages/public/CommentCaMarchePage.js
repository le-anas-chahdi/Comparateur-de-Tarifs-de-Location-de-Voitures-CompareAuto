import React from 'react';
import Navbar from '../../components/layout/Navbar';
import CommentCaMarche from '../../components/sections/CommentCaMarche';

const CommentCaMarchePage = () => {
  return (
    <div>
      <Navbar />
      <h1>Comment ca marche</h1>
      <CommentCaMarche />
    </div>
  );
};

export default CommentCaMarchePage;
