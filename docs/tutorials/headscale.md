---
sidebar_position: 5
sidebar_label: HEADSCALE
---

# HEADSCALE
This project was development by Juan Font. To access the complete project, visit: [***GitHub - Headscale***](https://github.com/juanfont/headscale)

## HEADSCALE ON LINUX
Headscale is based on tailscale, so headscale is installed on the server and tailscale is installed on the client.

## **SERVER Configuration**

### 1. Download Headscale Package
Download the lastest headscale package .deb for linux Debian or Ubuntu:[***Headscale Releases***](https://github.com/juanfont/headscale/releases)

```bash
wget --output-document=headscale.deb \
https://github.com/juanfont/headscale/releases/download/v0.22.3/headscale_0.22.3_linux_amd64.deb
```

### 2. Install Headscale

**↳** from dpkg:
```bash
sudo dpkg -i headscale.deb
```
**↳** from apt:
```bash
sudo apt-get install headscale.deb
```

### 3. Enable Headscale Service

```bash
systemctl enable headscale
```

### 4. Create Headscale Config

```bash
nano /etc/headscale/config.yaml
```

**↳** Use example configuration:  

[***config-example.yaml***](/darklab/configurations/config-example.yaml)

### 5. Start headscale

```bash
sudo systemctl start headscale
```

### 6. Stop Headscale

```bash
sudo systemctl stop headscale
```

### 7. Headscale Status

```bash
sudo systemctl status headscale
```

### 8. Create User

```bash
headscale users create <first-user>
```

### 9. Create Pre Authenticate Key

```bash
headscale --user <first-user> preauthkeys create --expiration 24h
```

## **CLIENT Configuration**

### 1. Install Tailscale

```bash
sudo apt-get update
```

```bash
sudo apt-get install tailscale
```

### 2. Run Tailscale 

```bash
sudo tailscale up --login-server <http://ip-server:port> authkey <preAuthKey> --accept-routes=true --accept-dns=false --advertise-routes=<ip/24>
```

### 3. Link Registration
Click the link to register the node.

```bash
To authenticate, visit:

	https://login.tailscale.com/<device>
```

### 4. Register Node on Server
Go to server and register node.

```bash
headscale nodes register --user <first-user> --key <nodekey generated in login tailscale>
```

## HEADSCALE ON DOCKER


## **HEADSCALE CLI**

### • Launch Headscale

```bash
systemctl start headscale
```

```bash
systemctl restart headscale
```

```bash
systemctl stop headscale
```

```bash
systemctl status headscale
```

### • Test Metrics

```bash
curl <htpp://ip:port>/metrics
```

### • Create Users

```bash
headscale users create <headscale-user>
```

### • Create Pre Authentication Keys

```bash
headscale --user <headscale-user> preauthkeys create --reusable --expiration <time-key>
```

### • Show Ports

```bash
ss -tlnp | grep headscale
```

### • Nodes List

```bash
headscale nodes list
```

```bash
headscale --user <headscale-user> node register --key <nodekey generated in login tailscale>
```


```bash
headscale node rename <node-name> -i <id-node>
```

```bash
headscale node expire -i <id-node>
```

```bash
headscale node delete -i <id-node>
```

```bash
headscale node move -i <id-node>
```

### • Routes List

```bash
headscale routes list
```

```bash
headscale routes show
```

```bash
headscale routes list -i <id>
```

```bash
headscale route enable -r <id>
```

```bash
headscale route disable -r <id>
```

```bash
headscale route delete -r <id>
```

## **TAILSCALE CLI**

### Login Tailscale

```bash
tailscale up --login-server <http://ip:port> --accept-dns=false --accept-routes=true --advertise-routes=<ip/24>
```

### Logout Tailscale

```bash
tailscale logout
```

### Show Ip Route

```bash
ip route sho table 52
```

### Disconnect Tailscale

```bash
tailscale down
```

### Network Report Tailscale

```bash
tailscale netcheck
```

### Add Tailscale Preferences

```bash
tailscale set <flags>
```

**↳** Flags:  

`--accept-dns`

`--accept-risk=<risk>`

`-advertise-routes=`

`--accept-routes=<true or false>`

`--advertise-exit-node=<true or false>`

`--advertise-routes=<ip/24>`

`--ssh=true or false`

`-shields-up`

### Webserver Tailscaled

```bash
tailscale web
```
