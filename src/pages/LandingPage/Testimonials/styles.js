import styled from "styled-components";

export const TestimonialsWrapper = styled.div`
  width: 100%;
  height: max-content;
  position: relative;
  padding: 70px 0 0 0;

  .textWrap {
    h1,
    span {
      text-align: center;
      max-width: 600px;
      color: #050bac;
    }

    span {
      margin: 0;
    }
  }
  .commentsWrap {
    margin-top: 70px;
    position: relative;
    @media (max-width: 680px) {
      justify-content: center;
      margin-top: 40px;
    }

    @media (max-width: 1000px) {
      max-height: 500px;
      overflow: hidden;
    }
    .overlay {
      position: absolute;
      height: 100%;
      background-image: linear-gradient(180deg, rgba(245, 252, 255, 0) 0%, #F5FCFF 100%););
    }
    .comment {
      flex-wrap: nowrap;
      max-width: 300px;
      padding: 20px;
      min-height: 160px;
      background: #f2f2f2;
      border-radius: 20px;
      margin: 10px;

      @media (max-width: 1120px) {
        max-width: 350px;
      }
      @media (max-width: 800px) {
        max-width: 300px;
      }

      @media (max-width: 680px) {
        max-width: 400px;
        margin: 10px 0;
      }
      p {
        margin: 0 0 0 0;
      }
      .imageWrap {
        width: 70px;
        height: 70px;
        border-radius: 100%;
        overflow: hidden;
        margin-right: 10px;
        img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      }

      h5 {
        margin: 0;
      }
      span {
        color: #828282;
        svg {
          margin: 0 2px -3px 0;
          font-size: 16px;
          color: #828282;
        }
      }
      h5,
      span {
        width: 90%;
        max-width: 90%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  @media (max-width: 450px) {
    padding: 30px 0;
    h1 {
      font-size: 22px !important;
    }
    span {
      font-size: 10px;
    }
  }
`;
