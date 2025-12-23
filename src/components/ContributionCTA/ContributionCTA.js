import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function ContributionCTA() {
  return (
    <section className={styles.cta}>
      <h2>Contribute to the Docs</h2>
      <p>
        Found something outdated or missing? Help us improve the documentation
        with a quick suggestion or edit.
      </p>
      <Link className="button button--primary" to="/general/contributing">
        How to contribute
      </Link>
    </section>
  );
}
