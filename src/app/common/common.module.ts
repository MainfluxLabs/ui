import { NgModule } from '@angular/core';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { ThingsService } from './services/things/things.service';
import { ChannelsService } from './services/channels/channels.service';
import { CertsService } from './services/certs/certs.service';
import { BootstrapService } from './services/bootstrap/bootstrap.service';
import { GatewaysService } from './services/gateways/gateways.service';
import { LoraService } from './services/lora/lora.service';
import { OpcuaService } from './services/opcua/opcua.service';
import { OpcuaStore } from 'app/common/store/opcua.store';
import { MessagesService } from './services/messages/messages.service';
import { MqttManagerService } from './services/mqtt/mqtt.manager.service';
import { NotificationsService } from './services/notifications/notifications.service';
import { TwinsService } from './services/twins/twins.service';
import { UsersService } from './services/users/users.service';
import { UserGroupsService } from './services/users/groups.service';
import { FsService } from './services/fs/fs.service';
import { IntervalService } from './services/interval/interval.service';

import { TokenInterceptor } from 'app/auth/auth.token.interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  providers: [
    ThingsService,
    ChannelsService,
    BootstrapService,
    CertsService,
    GatewaysService,
    LoraService,
    OpcuaService,
    OpcuaStore,
    MessagesService,
    MqttManagerService,
    NotificationsService,
    TwinsService,
    UsersService,
    UserGroupsService,
    FsService,
    IntervalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class CommonModule { }
