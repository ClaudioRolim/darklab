import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    /*
    {
        title: 'Easy to Use',
        Svg: require('@site/static/img/undraw_code_review_re_woeb (1).svg').default,
        description: (
            <>
                Uncomplicated language for all levels of developers.
            </>
        ),
    },
    {
        title: 'Developer to Developer',
        Svg: require('@site/static/img/undraw_code_type.svg').default,
        description: (
            <>
                Made by developers for developers.
            </>
        ),
    },
    {
        title: 'Documentation',
        Svg: require('@site/static/img/undraw_books.svg').default,
        description: (
            <>
                Documentation into the <code>docs</code> directory.
            </>
        ),
    },*/
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
