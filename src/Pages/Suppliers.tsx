import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export const Suppliers = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <main className="main-section">
        <div className="section-header">
          <h1 className="page-title">Suppliers</h1>
          <a className="section-header-icon">
            <span className="material-icons dark-icon">redo</span>
          </a>
        </div>
        <table className="suppliers-table">
          <thead className="suppliers">
            <th className="avatar-icons-column"></th>
            <th className="company-column">Company</th>
            <th className="contact-column">Contact</th>
            <th className="title-column">Title</th>
            <th className="city-column">City</th>
            <th className="country-column">Country</th>
            <th className="empty-column"></th>
          </thead>
          <tbody>
            <tr className="gray-row">
              <td className="image-colomn">
                <img
                  src="https://avatars.dicebear.com/v2/initials/Charlotte-Cooper.svg"
                  className="rounded-full"
                />
              </td>
              <td className="row-item">
                <a className="link-company" href="/supplier/1">
                  Exotic Liquids
                </a>
              </td>
              <td className="row-item">Charlotte Cooper</td>
              <td className="row-item">Purchasing Manager</td>
              <td className="row-item">London</td>
              <td className="row-item">UK</td>
            </tr>
            <tr className="white-row">
              <td className="image-colomn">
                <img
                  src="https://avatars.dicebear.com/v2/initials/Shelley-Burke.svg"
                  className="rounded-full"
                />
              </td>
              <td className="row-item">
                <a className="link-company" href="/supplier/2">
                  New Orleans Cajun Delights
                </a>
              </td>
              <td className="row-item">Shelley Burke</td>
              <td className="row-item">Order Administrator</td>
              <td className="row-item">New Orleans</td>
              <td className="row-item">USA</td>
            </tr>
            <tr className="gray-row">
              <td className="image-colomn">
                <img
                  src="https://avatars.dicebear.com/v2/initials/Regina-Murphy.svg"
                  className="rounded-full"
                />
              </td>
              <td className="row-item">
                <a className="link-company" href="/supplier/3">
                  Grandma Kelly's Homestead
                </a>
              </td>
              <td className="row-item">Regina Murphy</td>
              <td className="row-item">Sales Representative</td>
              <td className="row-item">Ann Arbor</td>
              <td className="row-item">USA</td>
            </tr>
            <tr className="white-row">
              <td className="image-colomn">
                <img
                  src="https://avatars.dicebear.com/v2/initials/Yoshi-Nagase.svg"
                  className="rounded-full"
                />
              </td>
              <td className="row-item">
                <a className="link-company" href="/supplier/4">
                  Tokyo Traders
                </a>
              </td>
              <td className="row-item">Yoshi Nagase</td>
              <td className="row-item">Marketing Manager</td>
              <td className="row-item">Tokyo</td>
              <td className="row-item">Japan</td>
            </tr>
            <tr className="gray-row">
              <td className="image-colomn">
                <img
                  src="https://avatars.dicebear.com/v2/initials/Antonio-Saavedra.svg"
                  className="rounded-full"
                />
              </td>
              <td className="row-item">
                <a className="link-company" href="/supplier/5">
                  Cooperativa de Quesos 'Las Cabras'
                </a>
              </td>
              <td className="row-item">Antonio del Valle Saavedra</td>
              <td className="row-item">Export Administrator</td>
              <td className="row-item">Oviedo</td>
              <td className="row-item">Spain</td>
            </tr>
            <tr className="white-row">
              <td className="image-colomn">
                <img
                  src="https://avatars.dicebear.com/v2/initials/Mayumi-Ohno.svg"
                  className="rounded-full"
                />
              </td>
              <td className="row-item">
                <a className="link-company" href="/supplier/6">
                  Mayumi's
                </a>
              </td>
              <td className="row-item">Mayumi Ohno</td>
              <td className="row-item">Marketing Representative</td>
              <td className="row-item">Osaka</td>
              <td className="row-item">Japan</td>
            </tr>
            <tr className="gray-row">
              <td className="image-colomn">
                <img
                  src="https://avatars.dicebear.com/v2/initials/Ian-Devling.svg"
                  className="rounded-full"
                />
              </td>
              <td className="row-item">
                <a className="link-company" href="/supplier/7">
                  Pavlova, Ltd.
                </a>
              </td>
              <td className="row-item">Ian Devling</td>
              <td className="row-item">Marketing Manager</td>
              <td className="row-item">Melbourne</td>
              <td className="row-item">Australia</td>
            </tr>
            <tr className="white-row">
              <td className="image-colomn">
                <img
                  src="https://avatars.dicebear.com/v2/initials/Peter-Wilson.svg"
                  className="rounded-full"
                />
              </td>
              <td className="row-item">
                <a className="link-company" href="/supplier/8">
                  Specialty Biscuits, Ltd.
                </a>
              </td>
              <td className="row-item">Peter Wilson</td>
              <td className="row-item">Sales Representative</td>
              <td className="row-item">Manchester</td>
              <td className="row-item">UK</td>
            </tr>
            <tr className="gray-row">
              <td className="image-colomn">
                <img
                  src="https://avatars.dicebear.com/v2/initials/Lars-Peterson.svg"
                  className="rounded-full"
                />
              </td>
              <td className="row-item">
                <a className="link-company" href="/supplier/9">
                  PB Knäckebröd AB
                </a>
              </td>
              <td className="row-item">Lars Peterson</td>
              <td className="row-item">Sales Agent</td>
              <td className="row-item">Göteborg</td>
              <td className="row-item">Sweden</td>
            </tr>
            <tr className="white-row">
              <td className="image-colomn">
                <img
                  src="https://avatars.dicebear.com/v2/initials/Carlos-Diaz.svg"
                  className="rounded-full"
                />
              </td>
              <td className="row-item">
                <a className="link-company" href="/supplier/10">
                  Refrescos Americanas LTDA
                </a>
              </td>
              <td className="row-item">Carlos Diaz</td>
              <td className="row-item">Marketing Manager</td>
              <td className="row-item">Sao Paulo</td>
              <td className="row-item">Brazil</td>
            </tr>
            <tr className="gray-row">
              <td className="image-colomn">
                <img
                  src="https://avatars.dicebear.com/v2/initials/Petra-Winkler.svg"
                  className="rounded-full"
                />
              </td>
              <td className="row-item">
                <a className="link-company" href="/supplier/11  ">
                  Heli Süßwaren GmbH & Co. KG
                </a>
              </td>
              <td className="row-item">Petra Winkler</td>
              <td className="row-item">Sales Manager</td>
              <td className="row-item">Berlin</td>
              <td className="row-item">Germany</td>
            </tr>
            <tr className="white-row">
              <td className="image-colomn">
                <img
                  src="https://avatars.dicebear.com/v2/initials/Martin-Bein.svg"
                  className="rounded-full"
                />
              </td>
              <td className="row-item">
                <a className="link-company" href="/supplier/12">
                  Plutzer Lebensmittelgroßmärkte AG
                </a>
              </td>
              <td className="row-item">Martin Bein</td>
              <td className="row-item">International Marketing Mgr.</td>
              <td className="row-item">Frankfurt</td>
              <td className="row-item">Germany</td>
            </tr>
            <tr className="gray-row">
              <td className="image-colomn">
                <img
                  src="https://avatars.dicebear.com/v2/initials/Sven-Petersen.svg"
                  className="rounded-full"
                />
              </td>
              <td className="row-item">
                <a className="link-company" href="/supplier/13">
                  Nord-Ost-Fisch Handelsgesellschaft mbH
                </a>
              </td>
              <td className="row-item">Sven Petersen</td>
              <td className="row-item">Coordinator Foreign Markets</td>
              <td className="row-item">Cuxhaven</td>
              <td className="row-item">Germany</td>
            </tr>
            <tr className="white-row">
              <td className="image-colomn">
                <img
                  src="https://avatars.dicebear.com/v2/initials/Elio-Rossi.svg"
                  className="rounded-full"
                />
              </td>
              <td className="row-item">
                <a className="link-company" href="/supplier/14">
                  Formaggi Fortini s.r.l.
                </a>
              </td>
              <td className="row-item">Elio Rossi</td>
              <td className="row-item">Sales Representative</td>
              <td className="row-item">Ravenna</td>
              <td className="row-item">Italy</td>
            </tr>
            <tr className="gray-row">
              <td className="image-colomn">
                <img
                  src="https://avatars.dicebear.com/v2/initials/Beate-Vileid.svg"
                  className="rounded-full"
                />
              </td>
              <td className="row-item">
                <a className="link-company" href="/supplier/15">
                  Norske Meierier
                </a>
              </td>
              <td className="row-item">Beate Vileid</td>
              <td className="row-item">Marketing Manager</td>
              <td className="row-item">Sandvika</td>
              <td className="row-item">Norway</td>
            </tr>
            <tr className="white-row">
              <td className="image-colomn">
                <img
                  src="https://avatars.dicebear.com/v2/initials/Cheryl-Saylor.svg"
                  className="rounded-full"
                />
              </td>
              <td className="row-item">
                <a className="link-company" href="/supplier/16">
                  Bigfoot Breweries
                </a>
              </td>
              <td className="row-item">Cheryl Saylor</td>
              <td className="row-item">Regional Account Rep.</td>
              <td className="row-item">Bend</td>
              <td className="row-item">USA</td>
            </tr>
            <tr className="gray-row">
              <td className="image-colomn">
                <img
                  src="https://avatars.dicebear.com/v2/initials/Michael-Björn.svg"
                  className="rounded-full"
                />
              </td>
              <td className="row-item">
                <a className="link-company" href="/supplier/17">
                  Svensk Sjöföda AB
                </a>
              </td>
              <td className="row-item">Michael Björn</td>
              <td className="row-item">Sales Representative</td>
              <td className="row-item">Stockholm</td>
              <td className="row-item">Sweden</td>
            </tr>
            <tr className="white-row">
              <td className="image-colomn">
                <img
                  src="https://avatars.dicebear.com/v2/initials/Guylène-Nodier.svg"
                  className="rounded-full"
                />
              </td>
              <td className="row-item">
                <a className="link-company" href="/supplier/18">
                  Aux joyeux ecclésiastiques
                </a>
              </td>
              <td className="row-item">Guylène Nodier</td>
              <td className="row-item">Sales Manager</td>
              <td className="row-item">Paris</td>
              <td className="row-item">France</td>
            </tr>
            <tr className="gray-row">
              <td className="image-colomn">
                <img
                  src="https://avatars.dicebear.com/v2/initials/Robb-Merchant.svg"
                  className="rounded-full"
                />
              </td>
              <td className="row-item">
                <a className="link-company" href="/supplier/17">
                  New England Seafood Cannery
                </a>
              </td>
              <td className="row-item">Robb Merchant</td>
              <td className="row-item">Wholesale Account Agent</td>
              <td className="row-item">Boston</td>
              <td className="row-item">USA</td>
            </tr>
            <tr className="white-row">
              <td className="image-colomn">
                <img
                  src="https://avatars.dicebear.com/v2/initials/Chandra-Leka.svg"
                  className="rounded-full"
                />
              </td>
              <td className="row-item">
                <a className="link-company" href="/supplier/20">
                  Leka Trading
                </a>
              </td>
              <td className="row-item">Chandra Leka</td>
              <td className="row-item">Owner</td>
              <td className="row-item">Singapore</td>
              <td className="row-item">Singapore</td>
            </tr>
          </tbody>
        </table>
        <div className="switch-btns"></div>
      </main>
    </div>
  );
};
