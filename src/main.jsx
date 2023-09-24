import React from 'react'
import ReactDOM from 'react-dom/client'
import { restaurants } from './constants/mock';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <header>
      <h1>Restaurants</h1>
      <hr/>
    </header>
    <main>
      <section>
        <h2>{restaurants[0].name}</h2>

        <section>
          <h3>Menu</h3>

          <ul>
            <li>
              <div>{restaurants[0].menu[0].name} - <strong>${restaurants[0].menu[0].price}</strong></div>
              <i>
                <span>Ingredients: </span>
                <span>{restaurants[0].menu[0].ingredients[0]}, </span>
                <span>{restaurants[0].menu[0].ingredients[1]}</span>
              </i>
            </li>

            <li>
              <div>{restaurants[0].menu[1].name} - <strong>${restaurants[0].menu[1].price}</strong></div>
              <i>
                <span>Ingredients: </span>
                <span>{restaurants[0].menu[1].ingredients[0]}</span>
              </i>
            </li>

            <li>
              <div>{restaurants[0].menu[2].name} - <strong>${restaurants[0].menu[2].price}</strong></div>
              <i>
                <span>Ingredients: </span>
                <span>{restaurants[0].menu[2].ingredients[0]}, </span>
                <span>{restaurants[0].menu[2].ingredients[1]}</span>
              </i>
            </li>
          </ul>
        </section>

        <section>
          <h3>Reviews</h3>

          <ul>
            <li>
              <div><strong>{restaurants[0].reviews[0].user}:</strong></div>
              <div>{restaurants[0].reviews[0].text}</div>
              <i>Rating: {restaurants[0].reviews[0].rating} / 5</i>
            </li>

            <li>
              <div><strong>{restaurants[0].reviews[1].user}:</strong></div>
              <div>{restaurants[0].reviews[1].text}</div>
              <i>Rating: {restaurants[0].reviews[1].rating} / 5</i>
            </li>
          </ul>
        </section>
      </section>

      <hr/>

      <section>
        <h2>{restaurants[1].name}</h2>

        <section>
          <h3>Menu</h3>

          <ul>
            <li>
              <div>{restaurants[1].menu[0].name} - <strong>${restaurants[1].menu[0].price}</strong></div>
              <i>
                <span>Ingredients: </span>
                <span>{restaurants[1].menu[0].ingredients[0]}, </span>
                <span>{restaurants[1].menu[0].ingredients[1]}, </span>
                <span>{restaurants[1].menu[0].ingredients[2]}</span>
              </i>
            </li>

            <li>
              <div>{restaurants[1].menu[1].name} - <strong>${restaurants[1].menu[1].price}</strong></div>
              <i>
                <span>Ingredients: </span>
                <span>{restaurants[1].menu[1].ingredients[0]}, </span>
                <span>{restaurants[1].menu[1].ingredients[1]}, </span>
                <span>{restaurants[1].menu[1].ingredients[2]}, </span>
                <span>{restaurants[1].menu[1].ingredients[3]}</span>
              </i>
            </li>
          </ul>
        </section>

        <section>
          <h3>Reviews</h3>

          <ul>
            <li>
              <div><strong>{restaurants[1].reviews[0].user}:</strong></div>
              <div>{restaurants[1].reviews[0].text}</div>
              <i>Rating: {restaurants[1].reviews[0].rating} / 5</i>
            </li>

            <li>
              <div><strong>{restaurants[1].reviews[1].user}:</strong></div>
              <div>{restaurants[1].reviews[1].text}</div>
              <i>Rating: {restaurants[1].reviews[1].rating} / 5</i>
            </li>

            <li>
              <div><strong>{restaurants[1].reviews[2].user}:</strong></div>
              <div>{restaurants[1].reviews[2].text}</div>
              <i>Rating: {restaurants[1].reviews[2].rating} / 5</i>
            </li>
          </ul>
        </section>
      </section>

      <hr />

      <section>
        <h2>{restaurants[2].name}</h2>

        <section>
          <h3>Menu</h3>

          <ul>
            <li>
              <div>{restaurants[2].menu[0].name} - <strong>${restaurants[2].menu[0].price}</strong></div>
              <i>
                <span>Ingredients: </span>
                <span>{restaurants[2].menu[0].ingredients[0]}</span>
              </i>
            </li>

            <li>
              <div>{restaurants[2].menu[1].name} - <strong>${restaurants[2].menu[1].price}</strong></div>
              <i>
                <span>Ingredients: </span>
                <span>{restaurants[2].menu[1].ingredients[0]}, </span>
                <span>{restaurants[2].menu[1].ingredients[1]}</span>
              </i>
            </li>

            <li>
              <div>{restaurants[2].menu[2].name} - <strong>${restaurants[2].menu[2].price}</strong></div>
              <i>
                <span>Ingredients: </span>
                <span>{restaurants[2].menu[2].ingredients[0]}</span>
              </i>
            </li>
          </ul>
        </section>

        <section>
          <h3>Reviews</h3>

          <ul>
            <li>
              <div><strong>{restaurants[2].reviews[0].user}:</strong></div>
              <div>{restaurants[2].reviews[0].text}</div>
              <i>Rating: {restaurants[2].reviews[0].rating} / 5</i>
            </li>
          </ul>
        </section>
      </section>

      <hr />

      <section>
        <h2>{restaurants[3].name}</h2>

        <section>
          <h3>Menu</h3>

          <ul>
            <li>
              <div>{restaurants[3].menu[0].name} - <strong>${restaurants[3].menu[0].price}</strong></div>
              <i>
                <span>Ingredients: </span>
                <span>{restaurants[3].menu[0].ingredients[0]}</span>
              </i>
            </li>

            <li>
              <div>{restaurants[3].menu[1].name} - <strong>${restaurants[3].menu[1].price}</strong></div>
              <i>
                <span>Ingredients: </span>
                <span>{restaurants[3].menu[1].ingredients[0]}, </span>
                <span>{restaurants[3].menu[1].ingredients[1]}</span>
              </i>
            </li>
          </ul>
        </section>

        <section>
          <h3>Reviews</h3>

          <ul>
            <li>
              <div><strong>{restaurants[3].reviews[0].user}:</strong></div>
              <div>{restaurants[3].reviews[0].text}</div>
              <i>Rating: {restaurants[3].reviews[0].rating} / 5</i>
            </li>

            <li>
              <div><strong>{restaurants[3].reviews[1].user}:</strong></div>
              <div>{restaurants[3].reviews[1].text}</div>
              <i>Rating: {restaurants[3].reviews[1].rating} / 5</i>
            </li>
          </ul>
        </section>
      </section>
    </main>
  </React.StrictMode>
);