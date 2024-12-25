"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const MImage = styled.section`
  width: 1270px;
  height: 200px;
  overflow: hidden;
  border-radius: 30px;
  margin: 0 auto;
  position: relative;
`;

const MrecentWrap = styled.section`
  display: bloc;
  width: 100%;
  padding: 40px 0;
  .re-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .card-contain {
    width: 100%;
    display: flex;
    justify-content: center;
    .card-wrap {
      width: calc(100% - 45px);
      height: 220px;
      padding: 10px 45px 10px 10px;
      border: 1px solid black;
      border-radius: 20px;
      display: flex;
      position: relative;
      .cardImage {
        width: 360px;
        height: 100%;
        overflow: hidden;
        position: relative;
        margin-right: 45px;
      }
      button {
        width: 100px;
        height: 40px;
        border-radius: 10px;
        background-color: #f68e43;
        color: white;
        position: absolute;
        right: 20px;
        bottom: 20px;
      }
    }
  }
`;

const MContents = styled.section`
  .con-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .card-contain {
    width: 100%;
    display: flex;
    gap: 0 20px;
    overflow: hidden;
    .card-wrap {
      .cardImage {
        width: 270px;
        height: 140px;
        position: relative;
        img {
        }
      }
      .cardText {
        width: 270px;
        height: 50px;
        font-size: 16px;
        line-height: 1.5; /* 줄 간격 */
        max-height: calc(16pt * 1.5 * 6); /* 최대 6줄 높이 설정 */
        white-space: nowrap;
        white-space: break-spaces;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        text-overflow: ellipsis; /* ...으로 표시 */
        word-break: break-word;
        overflow: hidden;
      }
    }
  }
`;

const Mhome = () => {
  return (
    <>
      <MImage className="OpenImg">
        <Image src="/assets/IMAGE/mainbg.png" alt="Main_bg" fill sizes="(max-width: 1270px) 100vw" style={{ objectFit: "cover" }} />
      </MImage>
      <MrecentWrap className="recent-wrap">
        <p className="re-title">Recent</p>
        <div className="card-contain">
          <div className="card-wrap">
            <div className="cardImage">
              <Image src={`/assets/IMAGE/grayscale.png`} alt="grayscale" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="re-text">
              <h1>HEADING</h1>
              <p>contents contents</p>
            </div>
            <button>MORE</button>
          </div>
        </div>
      </MrecentWrap>
      <MContents>
        <h1 className="con-title">Contets</h1>
        <div className="card-contain">
          <div className="card-wrap">
            <div className="cardImage">
              <Image src={`/assets/IMAGE/grayscale.png`} alt="grayscale" sizes="(max-width: 1270px) 100vw" fill style={{ objectFit: "cover" }} />
            </div>
            <p className="cardText">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="card-wrap">
            <div className="cardImage">
              <Image src={`/assets/IMAGE/grayscale.png`} alt="grayscale" sizes="(max-width: 1270px) 100vw" fill style={{ objectFit: "cover" }} />
            </div>
            <p className="cardText">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="card-wrap">
            <div className="cardImage">
              <Image src={`/assets/IMAGE/grayscale.png`} alt="grayscale" sizes="(max-width: 1270px) 100vw" fill style={{ objectFit: "cover" }} />
            </div>
            <p className="cardText">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="card-wrap">
            <div className="cardImage">
              <Image src={`/assets/IMAGE/grayscale.png`} alt="grayscale" sizes="(max-width: 1270px) 100vw" fill style={{ objectFit: "cover" }} />
            </div>
            <p className="cardText">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="card-wrap">
            <div className="cardImage">
              <Image src={`/assets/IMAGE/grayscale.png`} alt="grayscale" sizes="(max-width: 1270px) 100vw" fill style={{ objectFit: "cover" }} />
            </div>
            <p className="cardText">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </MContents>
    </>
  );
};

export default Mhome;
