# ROZY.EG setup

The shop is a static website. Supabase supplies shared authentication, products,
orders, manager invitations, social links, and uploaded images.

1. Create a Supabase project. In its SQL Editor, run the **latest complete
   contents** of `supabase-schema.sql`. If the shop was already set up, run
   the updated file again to add the private support-chat tables and access
   policies.
2. Put the project's **Project URL** and **publishable/anon key** in
   `config.js`. Never put a `service_role` key in this website.
3. Open the website over HTTPS (or localhost), register the store owner's
   account, and confirm the email if email confirmation is enabled.
4. In the SQL Editor, promote the store owner account to the first administrator.
   Replace the example email with the email used to register the owner:

   ```sql
   update public.profiles
   set role = 'admin'
   where email = lower('owner@example.com');
   ```

5. Sign in again. The administrator dashboard can invite additional managers
   by email; each invited manager registers with that same email address.
6. Add the store's social links and phone number in the dashboard. Product and
   background images can be uploaded there or supplied as image URLs.
7. Customers can open private technical-support chats after placing an order.
   Each customer's messages are isolated by database policies; administrators
   can review and reply to all support conversations from the support page.

The install icon is offered by supported browsers when the site is served over
HTTPS. On iPhone/iPad, use the browser's **Add to Home Screen** action.