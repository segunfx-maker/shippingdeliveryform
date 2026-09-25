# Delivery Information Form

A responsive, self-contained delivery request form configured for Netlify Forms.

## Deploy to Netlify

1. Sign in at [app.netlify.com](https://app.netlify.com).
2. Select **Add new project**, then **Import an existing project**.
3. Connect the Git provider that contains this project and select the repository.
4. Leave the build command empty. Set the publish directory to `.` if Netlify does not read it from `netlify.toml` automatically.
5. Select **Deploy** and wait for the production deploy to finish.
6. Open **Project configuration → General → Project details** to change the generated project name if desired.
7. Select **Open production deploy**. Copy the public `https://your-project-name.netlify.app` address from the browser.

For a manual deployment instead, drag the folder containing `index.html`, `styles.css`, `script.js`, and `netlify.toml` onto the deploy area at [app.netlify.com/drop](https://app.netlify.com/drop).

## View responses

In the Netlify project dashboard, open the **Forms** tab and select **delivery-information**. New entries appear under **Form submissions**. Netlify also lets project owners configure submission notifications from the Forms area.

## Local preview

From this directory, run `netlify dev --port 8889`, then open `http://localhost:8889`. Native Netlify form storage is completed on a deployed site; local development is intended for interface and validation testing.
