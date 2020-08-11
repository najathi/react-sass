import React from 'react'

import styles from './SampleCmp.module.scss';

export const SampleCmp = () => {
	return (
		<div>
			<p className={styles.text}>Sample Paragraph</p>
			<p className="text__2">Sample 3</p>
		</div>
	)
}
