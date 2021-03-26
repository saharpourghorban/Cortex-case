import Auth from "pages/Auth";
import CampaignPage from "pages/CampaignPage";
import ClientPage from "pages/ClientPage";
import NotFound from "pages/NotFound";
import UserPage from "pages/UserPage";
import { Redirect, Route, Switch } from "react-router";

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/campaigns" />
      </Route>

      <Route path="/campaigns">
        <CampaignPage />
      </Route>

      <Route path="/auth">
        <Auth />
      </Route>

      <Route path="/clients">
        <ClientPage />
      </Route>

      <Route path="/users">
        <UserPage />
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}
