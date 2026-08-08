---
title: "Apicom Hive Sentinel"
status: "Ideation"
category: "Ecological & Agricultural"
lastUpdated: "2026-08-02"
---

# Project: Apicom Hive Sentinel
**Status**: Ideation
**Category**: Ecological & Agricultural

## The Problem: Colony Collapse Disorder
Global pollinator populations are collapsing due to Varroa mites, extreme weather, and colony stress. Beekeepers often don't realize a hive is dying until they physically open it, which causes further stress to the bees.

## The Solution: Acoustic & Thermal Telemetry
Tying into John's ecological focus on pollinators (white clover planting), the Apicom is a 5-millimeter thin IoT "blade" that slides between the frames of any standard Langstroth beehive.
- **The Hardware**: Powered by a tiny external solar panel, it features a micro-thermal sensor and a highly sensitive contact microphone.
- **The Software**: Using an ESP32 running Fast Fourier Transform (FFT) audio analysis on the edge, it listens to the exact frequency of the hive's buzz. 
- **Impact**: The frequency of a hive drastically changes when they lose a queen, when they are preparing to swarm, or when they are freezing. The thermal sensor detects the heat signature of the cluster. It beams an alert to the farmer, allowing them to intervene and save the hive days before a collapse occurs.
