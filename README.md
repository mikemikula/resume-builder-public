# Recipe Management App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It is designed to manage recipes efficiently using a modern web stack.

## Project Stack

- **Frontend**: Next.js with Tailwind CSS for styling and Formik/Yup for form management.
- **Backend**: Node.js with Express framework, using Prisma ORM to interact with a PostgreSQL database.
- **Search**: PostgreSQL Full-Text Search with GIN index.
- **Infrastructure**: Deployed on AWS Amplify for both frontend and backend, with Cloudflare as CDN.
- **DevOps**: Managed with Turborepo, GitHub Actions for CI/CD, and Docker for containerization.
- **Open Graph Image Generation**: Utilizes Vercel OG for dynamic Open Graph image generation, enhancing social media sharing with custom images.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm or pnpm
- Docker (for containerization)
- AWS CLI (for deployment)

### Development

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Building the Project

To build the project for production, run:

```bash
pnpm build
```

This will create an optimized build in the `.next` directory.

### Making Updates

To update dependencies or make changes to the project, ensure you are in the root directory and use:

```bash
pnpm update
```

For code changes, follow the established coding standards and ensure all tests pass before committing.

### Running on AWS Amplify

To deploy the backend on AWS, follow these steps:

1. **Build the Docker Image**:

   ```bash
   docker build -t my-backend-app .
   ```

2. **Push to AWS ECR**:

   - Tag the image:
     ```bash
     docker tag my-backend-app:latest <aws_account_id>.dkr.ecr.<region>.amazonaws.com/my-backend-app:latest
     ```
   - Push the image:
     ```bash
     docker push <aws_account_id>.dkr.ecr.<region>.amazonaws.com/my-backend-app:latest
     ```

3. **Deploy with AWS CLI**:
   ```bash
   aws deploy create-deployment --application-name myBackendApp --deployment-group-name myDeploymentGroup --revision revisionType=S3,s3Location={bucket=mybucket,key=myapp.zip}
   ```

## Google Analytics Configuration

To configure Google Analytics with this app, follow these steps:

1. **Set Up Google Analytics Account**:
   - Create a Google Analytics account if you haven't already.
   - Set up a new property and obtain your `GA_MEASUREMENT_ID`.

2. **Environment Variables**:
   - Create a `.env` file in the root of your project.
   - Add the following line to your `.env` file:
     ```plaintext
     NEXT_PUBLIC_GA_MEASUREMENT_ID=your-ga-measurement-id
     ```
   - Ensure this ID is available to the `Analytics` and `RootLayout` components.

3. **Tracked Events**:
   - The application tracks the following events:

     - **Page Views**:
       - **Event Name**: `page_view`
       - **Properties**:
         - `page_location`: URL of the page
         - `page_path`: Path of the page
         - `page_title`: Title of the page

     - **Clicks**:
       - **Event Name**: `click`
       - **Properties**:
         - `click_relative_x`: X position of the click relative to the viewport
         - `click_relative_y`: Y position of the click relative to the viewport
         - `element_type`: Type of the HTML element clicked
         - `element_aria_label`: ARIA label of the element
         - `element_classes`: CSS classes of the element
         - `element_component`: Component name if available
         - `element_href`: Href attribute if the element is a link
         - `element_id`: ID of the element
         - `is_footer`: Boolean indicating if the element is in the footer
         - `is_header`: Boolean indicating if the element is in the header
         - `is_navigation`: Boolean indicating if the element is in the navigation
         - `section_id`: ID of the section containing the element
         - `element_section`: Section attribute of the element

     - **Errors**:
       - **Event Name**: `error`
       - **Properties**:
         - `error_file`: File where the error occurred
         - `error_line`: Line number of the error
         - `error_message`: Error message
         - `error_stack`: Stack trace of the error
         - `error_component`: Component stack where the error occurred

     - **Scroll Depth**:
       - **Event Name**: `scroll`
       - **Properties**:
         - `percent_scrolled`: Percentage of the page scrolled

     - **Custom Metrics**:
       - **Event Name**: `custom_metric`
       - **Properties**:
         - `metric_name`: Name of the metric (e.g., `active_time`, `engagement_time`, `scroll_depth`, `time_on_page`)
         - `metric_value`: Value of the metric
         - `metric_unit`: Unit of the metric (e.g., `seconds`, `percentage`)

     - **Session Start**:
       - **Event Name**: `session_start`
       - **Properties**:
         - `session_id`: Unique identifier for the session
         - `engagement_time_msec`: Engagement time in milliseconds

     - **First Visit**:
       - **Event Name**: `first_visit`
       - **Properties**:
         - `referrer`: Referring URL
         - `landing_page`: Landing page path

4. **Example .env Configuration**:
   ```plaintext
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

5. **Troubleshooting**:
   - Ensure the `GA_MEASUREMENT_ID` is correctly set in your environment variables.
   - Verify that the `Analytics` component is correctly integrated into your application.
   - Check the network requests in your browser's developer tools to ensure events are being sent to GA.

For more detailed instructions, refer to the [Google Analytics documentation](https://support.google.com/analytics/answer/1008015?hl=en) and ensure your setup aligns with the latest GA practices.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
