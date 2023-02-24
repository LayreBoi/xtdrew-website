<template>
  <xtdrew-faq>
    <xtdrew-title>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="340"
        height="100"
        viewBox="0 0 340 100"
      >
        <path
          id="FAQ"
          data-name="FAQ"
          d="M-1805.292-26.5a15.5,15.5,0,0,1-15.5-15.5v-69a15.5,15.5,0,0,1,15.5-15.5H-1737a15.5,15.5,0,0,1,15.5,15.5v69a15.64,15.64,0,0,1-.139,2.086l-19.419-19.558V-106.8h-60.177V-46.2h44.99l19.555,19.694-.311,0ZM-2046-26.5A15.5,15.5,0,0,1-2061.5-42v-69a15.5,15.5,0,0,1,15.5-15.5h68.292a15.5,15.5,0,0,1,15.5,15.5v4.2h-79.734v20.2h60.178v20.2h-60.178v39.9Zm280-32.553,10.993-11.071,32.737,32.97a15.528,15.528,0,0,1-11.7,10.359Zm-95.411,32.048V-66.4h-60.177v39.394h-8A15.507,15.507,0,0,1-1941.146-42v-69a15.5,15.5,0,0,1,15.5-15.5h68.292a15.5,15.5,0,0,1,15.5,15.5v69a15.506,15.506,0,0,1-11.561,14.995Zm-60.177-59.6h60.177v-20.2h-60.177Z"
          transform="translate(2061.5 126.5)"
        />
      </svg>
    </xtdrew-title>
    <xtdrew-qna-list>
      <xtdrew-qna v-for="q in FAQ" :key="q">
        <xtdrew-question>{{ q.question }}</xtdrew-question>
        <xtdrew-answer
          v-html="typeof q.answer == 'string' ? q.answer : q.answer.join('\n')"
        ></xtdrew-answer> </xtdrew-qna
    ></xtdrew-qna-list>
    <xtdrew-info
      >If you have more questions, simply contact me by my
      <a href="mailto:layreboi@mailayre.com" target="_blank">email</a> or
      Discord.</xtdrew-info
    >
  </xtdrew-faq>
</template>

<style scoped lang="scss">
xtdrew-faq {
  color: var(--xtdrew-dark1);
  align-items: center;
  xtdrew-title {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: {
      top: 20px;
      bottom: 40px;
    }

    svg {
      height: 100px;
      width: auto;
      fill: var(--xtdrew-faq-title);

      @media screen and (max-width: 770px) {
        & {
          height: 75px;
          width: auto;
        }
      }

      @media screen and (max-width: 600px) {
        & {
          height: 50px;
          width: auto;
        }
      }
    }
  }
  xtdrew-qna-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 20px;
    width: 100%;
    align-items: center;
    xtdrew-qna {
      display: flex;
      flex-direction: column;
      gap: 20px;
      text-align: center;
      align-items: center;
      width: 80%;
      transition: all 0.25s ease;

      @media screen and (max-width: 720px) {
        & {
          width: 95%;
        }
      }

      padding: 25px 0;
      border: {
        color: var(--xtdrew-dark1);
        width: 2px;
        style: solid;
        radius: 18px;
      }

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          border: {
            color: #00000000;
            width: 2px;
            style: solid;
            radius: 18px;
          }
          background-color: var(--xtdrew-light2);
          transform: scale(1.01);
        }
      }

      xtdrew-question {
        font-size: 20px;
        width: 90%;
      }

      xtdrew-answer {
        width: 90%;
      }
    }
  }

  xtdrew-info {
    width: 80%;
    text-align: center;

    @media screen and (max-width: 720px) {
      & {
        width: 95%;
        text-align: left;
      }
    }

    padding-bottom: 40px;
  }
}
</style>

<script setup lang="ts">
const FAQ: Question[] = [
  {
    question: "How is your name pronounced?",
    answer: "Ex-the-drew",
  },
  {
    question: "Where did you get your name?",
    answer:
      "I've got my name, xthedrew, from my older sister back in 2016, where she was creating an account for me in a rhythm game. Then at the beginning of 2022, I've decided to rename to xtdrew after I bought my domain \"xtdrew.xyz\"",
  },
  {
    question: "When did you start programming?",
    answer:
      "I started programming at around 2018 or so. YouTube somehow recommended me on how make a custom login screen with HTML and CSS, and this is where my interest in coding started.",
  },
  {
    question: "Why do you program and develop apps?",
    answer:
      "I develop applications because it's fun to make. Designing frontend websites made most fun for me, plus I love to experiment things!",
  },
  {
    question: "Who is LayreBoi?",
    answer: "LayreBoi is me as a musical artist, hence people call me Layre.",
  },
  {
    question: "What softwares do you use?",
    answer:
      "I use Visual Studio Code for editing codes and Adobe XD for making SVG images, such as Logos, covers, etc.",
  },
  {
    question: "What computer do you have?",
    answer:
      // "I have a desktop PC and a laptop. My PC is slower and has very old components, but has a more powerful graphics processor than my laptop. I think of buying a new PC once I get enough money.",
      "I own both a desktop and a laptop. My desktop has a powerful processor, AMD Ryzen 7 5800X, and GPU, Gigabyte GeForce RTX 3060 Gaming OC. It also has 32 GB of DDR4 RAM.",
  },
];
</script>
