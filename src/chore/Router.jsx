/**
 * DO NOT UPDATE THIS FILE
 *
 * This file is created to make the exercises friendly. Any update can break the exercises.
 */

import React from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import { EXERCISES } from './exercises';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {EXERCISES.map((exercise) => (
        <React.Fragment key={exercise.name}>
          <Route
            key={exercise.name}
            path={`/${exercise.name}`}
            element={<Exercise data={exercise} />}
          />
          <Route
            key={exercise.name}
            path={`/${exercise.name}/exercise`}
            element={exercise.parts.exercise}
          />
          {exercise.parts.solutions.map((solution, i) => (
            <Route
              key={`${exercise.name}-${i}`}
              path={`/${exercise.name}/solution/${i + 1}`}
              element={solution}
            />
          ))}
        </React.Fragment>
      ))}
    </Routes>
  );
};

const Exercise = ({ data }) => {
  return (
    <div>
      <h1>{data.name}</h1>
      <div className="nav-list">
        <Link to={`/${data.name}/exercise`}>Exercise</Link>
        {data.parts.solutions.map((_, i) => (
          <Link key={i} to={`/${data.name}/solution/${i + 1}`}>
            Solution {i + 1}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className="nav-list">
        {EXERCISES.map((exercise, i) => (
          <Link key={i} to={`/${exercise.name}`}>
            {exercise.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
