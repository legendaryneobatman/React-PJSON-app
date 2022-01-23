import React from 'react';

const About = () => {
  return (
      <div>
        <div className="container bg-white shadow rounded-3 p-5">
          <h1 className={"text-center"}>About Page</h1>
          <div>

            <div className="px-4 py-5 my-5 text-center">
              <h1 className="display-5 fw-bold">Учебное приложение</h1>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                  Приложение, цель, которого визуализация JSON данных.
                  Используемые технологии: <b>React, React-router, Bootstrap</b>
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
  );
};

export default About;
