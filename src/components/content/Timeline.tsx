import { useState, ReactNode } from 'react';

const Content1 = () => <p>Content 1</p>;
const Content2 = () => <p>Content 2</p>;
const Content3 = () => <p>Content 3</p>;
const Content4 = () => <p>Content 4</p>;
const Content5 = () => <p>Content 5</p>;
const Content6 = () => <p>Content 6</p>;
const Content7 = () => <p>Content 7</p>;
const Content8 = () => <p>Content 8</p>;
const Content9 = () => <p>Content 9</p>;
const Content10 = () => <p>Content 10</p>;

export const Timeline = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [content, setContent] = useState<ReactNode>(1);

  const toggleModal= (num?: number) => {
    setContent(num);
    setModal(true);
  };

  return (
    <>
      {modal && (
        <section className="Modal">
          <figure className="Modal__Overlay" />
          <figure className="Modal__Content">
            <button onClick={() => setModal(false)}>Close</button>
            <p>
              {content === 1 && <Content1 />}
              {content === 2 && <Content2 />}
              {content === 3 && <Content3 />}
              {content === 4 && <Content4 />}
              {content === 5 && <Content5 />}
              {content === 6 && <Content6 />}
              {content === 7 && <Content7 />}
              {content === 8 && <Content8 />}
              {content === 9 && <Content9 />}
              {content === 10 && <Content10 />}
            </p>
          </figure>
        </section>
      )}
      <section className="Timeline">
        <ul>
          <li></li>
          <li>
            <label>May 2023</label>
            <button onClick={() => toggleModal(1)}/>
          </li>
          <li>
            <label>June 2023</label>
            <button onClick={() => toggleModal(2)} />
          </li>
          <li>
            <label>July 2023</label>
            <button onClick={() => toggleModal(3)} />
          </li>
          <li>
            <label>August 2023</label>
            <button onClick={() => toggleModal(4)} />
          </li>
          <li>
            <label>September 2023</label>
            <button onClick={() => toggleModal(5)} />
          </li>
          <li>
            <label>October 2023</label>
            <button onClick={() => toggleModal(6)} />
          </li>
          <li>
            <label>November 2023</label>
            <button onClick={() => toggleModal(7)} />
          </li>
          <li>
            <label>December 2023</label>
            <button onClick={() => toggleModal(8)} />
          </li>
          <li>
            <label>January 2024</label>
            <button onClick={() => toggleModal(9)} />
          </li>
          <li>
            <label>February 2024</label>
            <button onClick={() => toggleModal(10)} />
          </li>
        </ul>
      </section>
    </>
  );
};
