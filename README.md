# Reusable Spinner Component Project
  Goal: Recreate the progress spinner as a reusable component using the supplied mockup file.


## Component Hierarchy 
* Progress Circle
* Details (transaction metadata)
* Action Bar

This project favors pure components for UI code which, given the same props, always render the same output. 
Any state and side-effects can be managed within the container component which wraps the progress circle, details, and action bar. 


### Progress Circle 
The progress circle is implemented using SVG. SVG was chosen because:
* SVG is declaritive,
* is fully interactive, and 
* scalable without distortion

Extracting the progress circle into a separate component provides the ability to conveniently swap progress visualizations for the purposes of A/B testing or utilizing the visualization in different contexts. For example, we may want to use a different shape visualization for file transfer status or use the circle progress visualization to represent the progress of a different operation. 

### Details & Action Bar
The details component and action bar are both useful as separate components for the same reasons as the progress circle. As separate components, different variations can be composed to create variations of the spinner component for use in A/B tests or extracted for use within a different context.

### Technology Stack
* [Next.js](https://nextjs.org/) React Framework
* [Grommet](https://v2.grommet.io/) Component Library
* [RITEway](https://github.com/ericelliott/riteway) Testing Framework

## Development
To run the development server:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run tests suite:
```bash
npm run test
```













