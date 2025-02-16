import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Rápidos',
    Svg: require('@site/static/img/imagem_oficinas2.svg').default,
    description: (
      <>
        Na nossa oficina, a agilidade é a chave.
      </>
    ),
  },
  {
    title: 'Eficazes',
    Svg: require('@site/static/img/imagem_oficinas1.svg').default,
    description: (
      <>
        A qualidade não é apenas uma promessa, é uma obrigação. 
      </>
    ),
  },
  {
    title: 'Baratos',
    Svg: require('@site/static/img/k.svg').default,
    description: (
      <>
        Conosco os custos são baixos e confiáveis.
      </>
    ),
  },
];



function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
