#!/bin/bash
docker run --name taskynDb -d --network host scylladb/scylla:5.0.1 --developer-mode=1 --cpuset 5 --memory 1G --overprovisioned 0 &&
docker run -d --name taskynMinio --network host -e "MINIO_ROOT_USER=root_user" -e "MINIO_ROOT_PASSWORD=root_pass" --cpuset-cpus 4 --memory 256m minio/minio:RELEASE.2022-03-17T06-34-49Z server /data &&
docker run --name taskynEnvoy -d --network host -v $(pwd)/envoy/envoy_node.dev.yaml:/envoy_node.yaml -v $(pwd)/envoy/certs/taskyn-ir.crt:/taskyn-ir.crt -v $(pwd)/envoy/certs/taskyn-ir.key:/taskyn-ir.key --memory 128mb --cpuset-cpus 3 envoyproxy/envoy-distroless:v1.21.1 -c /envoy_node.yaml
