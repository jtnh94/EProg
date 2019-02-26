import 'bootstrap/dist/css/bootstrap.min.css'
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faBolt } from "@fortawesome/free-solid-svg-icons/faBolt";
import { faFlushed } from "@fortawesome/free-solid-svg-icons/faFlushed";
import { faCube } from "@fortawesome/free-solid-svg-icons/faCube";
import { faRobot } from "@fortawesome/free-solid-svg-icons/faRobot";
import './scripts/junk2';

library.add(faBolt);
library.add(faFlushed);
library.add(faCube);
library.add(faRobot);
dom.watch();