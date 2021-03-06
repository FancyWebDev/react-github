import React from 'react';

export const About = () => {
  return(
    <>
      <div className="jumbotron jumbotron-fluid mt-4">
        <div className="container">
          <h1 className="display-4">Информация</h1>
          <p className="lead">
            Добро Пожаловать на сайт где можете наблюдать профили github пользователей.
            <small className={'d-block mt-2'}>
              Для поиска перейдите на страницу "Home" и наберите в поисковике имя 
              пользователя.
            </small>
          </p>
        </div>
      </div>
    </>
  );
}